const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");

const Room = require("../models/Room");
const Message = require("../models/Message");
const { KeyObject } = require("crypto");

// multer config
const upload = multer({
    storage: multer.diskStorage({
        destination : (req, file, cb)=>{
            const uploadPath = path.join(__dirname,"..","static","room",req.query.roomId);

            if(!fs.existsSync(uploadPath)){
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            req.uploadbaseURL = "/room/" + req.query.roomId +"/";
            cb(null,uploadPath);
        }
    })
})

const clients = new Set();

router.use((req,resp,next)=>{
    if(req.session.auth){
        next();
    }else{
        return resp.redirect("/account/signin");
    }
});

//======================================================
router.ws("/sse",(ws,req)=>{
    // 클라이언트쪽에서 웹소켓 연결이 일어났을때 작동함.
    // console.log(req.originalUrl +" connected by " + req.session.id);
    clients.add(ws);
    ws.on("close",()=>{
        console.log("closed...");
        clients.delete(ws);
    });
});

const roomWss = new Map();
router.ws("/room",(ws,req)=>{
    // console.log("ws://~room " + req.query._id, );    
    roomWss.set(req.session.userId, ws);  // Map 에 데이터 저장(Key, value)
    // console.log(roomWss);
    ws.on("close",()=>{
        roomWss.delete(ws);
    });
});
//======================================================
router.get("/",async(req,resp)=>{
    const rooms = await Room.find({}).sort("-createdAt").lean();
    const joinRooms = await Room.find({joiner:req.session.userId}).sort("-createdAt")
                .populate({path: "key",match:{unread:req.session.userId}}).lean();
    const unJoinRooms = await Room.find({joiner:{$ne: req.session.userId}}).sort("-createdAt").lean();
    const select = await Room.find({joiner:req.session.userId}).select("_id").lean();
    const messages = await Message.findOne({roomId: select}).sort("-createdAt").lean();
    //console.log(messages);
    joinRooms.forEach((room)=>{
        // room.count = room.key.filter((msg)=>{
        //     return msg.unread.includes(req.session.userId);
        // }).length;
        room.count=room.key.length;
    })
    resp.locals.rooms = rooms;
    resp.locals.joinRooms = joinRooms;
    resp.locals.unJoinRooms = unJoinRooms;
    resp.locals.messages = messages;
    //console.log(messages);
    resp.render("chats/index",{sessionId:req.session.userId});
});

router.route("/open")
    .get((req,resp)=>{
        resp.render("chats/open");
        //console.log(wsInstance);
    })
    .post(async(req,resp)=>{
        //body 안에 title, type, password란 이름으로 데이터가 있다고 가정
        let data= {...req.body, owner: req.session.userId};
        let result = await Room.create(data);    
        // console.log(result);
       
        clients.forEach((ws) => {
            ws.send(JSON.stringify({"type":"new"}));
        });

        resp.redirect("/chats/room?_id="+result._id);
    });

router.get("/room",async(req,resp)=>{      
    // console.log(newJoin);
    // find로 찾으면 배열로 나오고, findOne은 객체로 나온다.
    // const room = await Room.findByIdAndUpdate(roomId,{$addToSet:{joiner:newJoin}},{returnDocument:"after"});
    
    await Room.updateOne({_id : req.query._id}, { $addToSet: { joiner: req.session.userId } });
    // await Message.updateMany({roomId:req.query._id},{$addToSet:{read:req.session.userId}});

    const room = await Room.findOne({_id : req.query._id});     // Room.findById(req.query._id);
    // const message = await Message.find({roomId:req.query._id}).sort("createdAt").lean();
    const msg1 = await Message.find({roomId:req.query._id}).sort("createdAt").lean();    
        
    msg1.forEach(async(elm)=>{
        if(elm.read.includes(req.session.userId)){
            //console.log(elm.read , elm.readCnt);
            return;
        }else{
            //console.log(elm.read , elm.readCnt);
            let newCnt = elm.readCnt-1>0 ? elm.readCnt-1 : 0 ;
            await Message.updateOne({_id : elm._id},{$set:{readCnt:newCnt}});
        }    
    });

    await Message.updateMany({roomId:req.query._id},{$addToSet:{read:req.session.userId},$pull: {unread:req.session.userId}});
    const message = await Message.find({roomId:req.query._id}).sort("createdAt").lean();
    //resp.locals.message = message;
    
    resp.locals.room = room;
    resp.locals.message = message.map((one)=>{
        return {...one, type: one.talker == req.session.userId ? "mine" : "other"}
    });
    // console.log(message);
    //console.log("1",resp.locals.message);
    roomWss.forEach((ws)=>{            
        ws.send(JSON.stringify({
            apply:req.query._id ,type:"join", id:req.session.userId, joiner: room.joiner, message
        }));            
    });
    resp.render("chats/room",{sessionId:req.session.userId});
});

router.route("/exit")
    .get(async(req,resp)=>{
        let roomId = req.query._id;
        // console.log(roomId);
        await Room.updateOne({_id:roomId},{$pull:{joiner:req.session.userId}});
        let rst = await Message.updateMany({roomId:roomId},{$pull:{author:req.session.userId}});
        // console.log(rst);
        const room = await Room.findOne({_id : req.query._id});
        
        roomWss.forEach((ws)=>{            
            ws.send(JSON.stringify({
                apply:roomId ,type:"exit", id:req.session.userId, joiner: room.joiner
            }));            
        });
        resp.redirect("/chats");
    });





// 채팅 룸에서 발생한 ajax요청을 처리할 곳
router.post("/api/message",async (req,resp)=>{
    // req.body에 roomId랑, talker, comment가 왔다는 조건 하에
    try{
        // console.log(req.body);
        const room = await Room.findById(req.body.roomId).lean();

        const unread = room.joiner.filter((one) => {
            if (one !== req.session.userId) {
                return true;
            } else {
                return false;
            }
        });
        const msg1 = await Message.find({roomId:req.body.roomId}).sort("createdAt").lean();    
        
        msg1.forEach(async(elm)=>{
            if(elm.unread.includes(req.session.userId)){
                await Message.updateOne({_id : elm._id},{$pull:{unread:req.session.userId}});
            }    
        });
        const message = await Message.find({roomId:req.body.roomId}).sort("createdAt").lean();
        const author = await Room.findOne({_id:req.body.roomId}).select("joiner -_id").lean();        
        let result = await Message.create({ ...req.body, unread,read:req.session.userId, author:author.joiner, readCnt:author.joiner.length-1, talker: req.session.userId, data:"chat" });
        // console.log(roomWss);
       

        // console.log("author: ", author);        
        // console.log(result instanceof Message);
        
        result = result.toObject();
       
        roomWss.forEach((ws, ownerId )=>{
            result.type = result.talker === ownerId ? "mine" : "other";
            ws.send(JSON.stringify({apply : req.body.roomId, type:"new", data : result, message}));
        });
        resp.json({ "success": true, "result": result });
    }catch(err){
        resp.json({"success" : false,"error":err.message});
    };
});

router.post("/api/upload", upload.single("attach"), async(req,resp)=>{
    // 업로드 처리 => DB에 저장 => 이 요청을 했던 사용자에게 resp.json으로 성공여부 알려주고
    // 해당 방 사용자들에게 파일 업로드 알림 메세지 전송해주면서 렌더링에 필요한 정보를 보내주면됨
    // console.log(req.body);
    try{
        const room = await Room.findById(req.body.roomId).lean();
        const unread = [...room.joiner];
        unread.splice(unread.indexOf(req.session.userId), 1);
        const msg1 = await Message.find({roomId:req.body.roomId}).sort("createdAt").lean();    
        
        msg1.forEach(async(elm)=>{
            if(elm.unread.includes(req.session.userId)){
                await Message.updateOne({_id : elm._id},{$pull:{unread:req.session.userId}});
            }    
        });
        const message = await Message.find({roomId:req.body.roomId}).sort("createdAt").lean();
        const author = await Room.findOne({_id:req.body.roomId}).select("joiner -_id").lean();
        let doc = {
            ...req.body,
            data:"file",
            talker: req.session.userId,
            author:author.joiner,
            readCnt:author.joiner.length-1,
            unread,
            content:"/room/"+req.body.roomId+"/"+req.file.filename
        };
        
        let result = await Message.create(doc);
        result = result.toObject();
       
        roomWss.forEach((ws, ownerId )=>{
            result.type = result.talker === ownerId ? "mine" : "other";
            ws.send(JSON.stringify({apply : req.body.roomId, type:"new", data : result, message}));
        });
        resp.json({ "success": true});
    }catch(err){
        resp.json({"success" : false});
    };
});



    
module.exports = router;
