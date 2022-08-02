const express = require("express");
const router = express.Router();

const clients = new Set();

const Room = require("../models/Room");
const Message = require("../models/Message");

router.use((req,resp,next)=>{
    if(req.session.auth){
        next();
    }else{
        return resp.redirect("/account/signin");
    }
});

router.ws("/sse",(ws,req)=>{
    // 클라이언트쪽에서 웹소켓 연결이 일어났을때 작동함.
    console.log(req.originalUrl +" connected by " + req.session.id);
    clients.add(ws);

    ws.on("close",()=>{
        console.log("closed...");
        clients.delete(ws);
    })
})

router.get("/",async(req,resp)=>{
    const rooms =await Room.find({}).sort("-createdAt").lean();
    
    //console.table(rooms);
    resp.locals.rooms = rooms;
    resp.render("chats/index");
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

router.route("/room")
    .get(async(req,resp)=>{
        let roomId = req.query._id;
        let newJoin = req.session.userId;        
        // console.log(newJoin);
        
        let room = await Room.findByIdAndUpdate(roomId,{$addToSet:{joiner:newJoin}},{returnDocument:"after"});
        let message = await Message.find({roomId:roomId}).lean();
        console.log(message);
        resp.locals.message = message;
        resp.locals.room = room;
        resp.render("chats/room",{newJoin});
    })

// 채팅 룸에서 발생한 ajax요청을 처리할 곳
router.post("/api/message",async (req,resp)=>{
    // req.body에 roomId랑, talker, comment가 왔다는 조건 하에
    try{
        let result = await Message.create({...req.body, talker: req.session.userId});
        resp.json({"success" : true, "result": result});
    }catch(err){
        resp.json({"success" : false,"error":err.message});
    };
});





    
module.exports = router;
