const express = require("express");
const path = require("path");
const router = express.Router();

const Room = require("../models/Room");
const Message = require("../models/Message");
const fs = require("fs");
const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            console.log(req.query.roomId, req.body.roomId);
            const uploadPath = path.join(__dirname, "..", "static", "room", req.query.roomId);
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            req.uploadbaseURL = "/room/" + req.query.roomId + "/";
            callback(null, uploadPath);
        }
    })
});


const clients = new Set();

router.use((req, resp, next) => {
    if (req.session.auth) {
        next();
    } else {
        // return resp.status(401).send("로그인한 상태에서만 사용가능합니다.");
        return resp.redirect("/account/login");
    }
});

//========================================
router.ws("/sse", (ws, req) => {
    // 클라이언트쪽에서 웹소켓 연결이 일어났을때 작동함.
    console.log(req.originalUrl + " connected by " + req.session.id);
    clients.add(ws);
    ws.on("close", () => {
        console.log("closed...");
        clients.delete(ws);
    });
});

const roomWss = new Map();

router.ws("/room", (ws, req) => {
    console.log("ws://~room " + req.query._id,);
    // 
    roomWss.set(req.session.userId, ws);  // Map 에 데이터 저장 (Key, value); 

    ws.on("close", () => {
        roomWss.delete(ws);
    });
});

//====================================================
router.get("/", async (req, resp) => {
    if (req.query.mode == "joined") {
        // populate시키면 key데이터도 출력
        const rooms = await 
                Room.find({ joiner: req.session.userId }).sort("-createdAt")
                .populate({path: "key"}).lean();
        rooms.forEach((room)=>{
            room.count = room.key.filter((msg)=>{
                return msg.unread.includes(req.session.userId);
            }).length;
        })
        // console.dir(rooms,{depth:3});
        // 미 참가중인 방을 찾고자 한다는 $ne
        // await Room.find({ joiner: { $ne: req.session.userId } }).sort("-createdAt").lean();
        resp.locals.rooms = rooms;
        resp.locals.joined = "active";
    } else {
        const rooms = await Room.find({}).sort("-createdAt").lean();
        resp.locals.rooms = rooms;
        resp.locals.all = "active";
    }
    resp.render("chats/index");
});

router.route("/open").get((req, resp) => {
    // console.log(wsInstance);
    resp.render("chats/open");
}).post(async (req, resp) => {
    // body 안에 title, type, password 란 이름으로 데이터가 있다고 가정
    let data = { ...req.body, owner: req.session.userId }
    let result = await Room.create(data);
    console.log(result);

    clients.forEach((ws) => {
        ws.send(JSON.stringify({ "type": "new" }));
    });
    // resp.sendStatus(200);
    resp.redirect("/chats/room?_id=" + result._id);
});

router.get("/room", async (req, resp) => {
    // const room = await Room.findByIdAndUpdate(req.query._id,
    //     { $addToSet: { joiner: req.session.userId } }, { returnDocument: "after" });
    await Room.updateOne({ _id: req.query._id }, { $addToSet: { joiner: req.session.userId } });
    const room = await Room.findOne({ _id: req.query._id });     // Room.findById(req.query._id);
    // find
    resp.locals.room = room;
    const messages = await Message.find({
        roomId: req.query._id,
        readable: req.session.userId
    }).sort("createdAt").lean();
    // 
    /*
         const readalbeMessage = messages.filter((one) => {  
            if(one.readable.includes(req.session.userId)) {
                return true;
            }else {
                return false;
            }
        });    
    */


    resp.locals.messages = messages.map((one) => {
        return { ...one, type: one.talker == req.session.userId ? "mine" : "other" };
    });

    //=====================================================
    roomWss.forEach((ws) => {
        ws.send(JSON.stringify({
            apply: req.query._id, type: "join", id: req.session.userId, joiner: room.joiner
        }));
    });
    resp.render("chats/room");
});

router.get("/exit", async (req, resp) => {
    let roomId = req.query._id;

    await Room.updateOne({ _id: roomId }, { $pull: { joiner: req.session.userId } });
    await Message.updateMany({ roomId: roomId }, { $pull: { readable: req.session.userId } });
    resp.redirect("/chats");

    const room = await Room.findOne({ _id: roomId });

    roomWss.forEach((ws) => {
        ws.send(JSON.stringify({ "apply": roomId, "type": "exit", "joiner": room.joiner }));
    });
})
// 채팅 룸에서 발생한 AJAX요청을 처리할 곳 
router.post("/api/message", async (req, resp) => {
    // req.body 에 roomId 랑 , comment가 왔다는 조건 하에
    console.log(req.body);
    try {
        const room = await Room.findById(req.body.roomId).lean();
        /*
            const unread = [...room.joiner]; 
            unread.splice(unread.findIndex(req.session.userId), 1);
        */
        const unread = room.joiner.filter((one) => {
            if (one !== req.session.userId) {
                return true;
            } else {
                return false;
            }
        });
        let result = await Message.create({
            ...req.body,
            talker: req.session.userId,
            data: "chat",
            readable: room.joiner,
            unread,
        });

        console.log(result instanceof Message);
        result = result.toObject();
        roomWss.forEach((ws, ownerId) => {
            result.type = result.talker === ownerId ? "mine" : "other";
            ws.send(JSON.stringify({ apply: req.body.roomId, type: "new", data: result }));
        });
        resp.json({ "success": true, "result": result });
    } catch (err) {
        resp.json({ "success": false, "error": err.message });
    }
});

router.post("/api/upload", upload.single("attach"), async (req, resp) => {
    // req.body 에 roomId 랑 , comment가 왔다는 조건 하에
    console.log(req.body);
    try {
        const room = await Room.findById(req.body.roomId).lean();
        const unread = [...room.joiner];
        unread.splice(unread.indexOf(req.session.userId), 1);

        let result = await Message.create({
            ...req.body, talker: req.session.userId,
            data: "file", content: "/room/" + req.body.roomId + "/" + req.file.filename,
            readable: room.joiner,
            unread
        });

        result = result.toObject();
        roomWss.forEach((ws, ownerId) => {
            result.type = result.talker === ownerId ? "mine" : "other";
            ws.send(JSON.stringify({ apply: req.body.roomId, type: "new", data: result }));
        });
        resp.json({ "success": true });
    } catch (err) {
        console.log(err);
        resp.json({ "success": false });
    }
});


















module.exports = router;
