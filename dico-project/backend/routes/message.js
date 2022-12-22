const express = require("express");
const jwt = require("jsonwebtoken");
const message = require("../models/message");
const relationship = require("../models/relationship");
const user = require("../models/user");

const router = express.Router();
/*
router.use((req, res, next) => {
    const authorization = req.get("authorization");
    if (!authorization) {
        return res.status(401).json({ message: "인증 값이 존재하지 않습니다." });
    }
    if (authorization.startsWith("Bearer")) {
        const token = authorization.split(/\s/)[1];
        const payload = jwt.verify(token, "a28b865e94826463d56fe7708a527cd2");
        // console.log(payload);   // { user: { email: one.email, name: one.name } }
        req.data = payload;
        next();
    } else {
        return res.status(401).json({ message: "지원되지 않는 밸류입니다." });
    }
});
*/

// 다이렉트 메시지 등록 
router.post("/:channel/message", async (req, res) => {
    const one = {
        channel: req.params.channel,
        author: req.body.author,
        content: req.body.content,
        timestamp: new Date()
    }
    const rst = await message.create(one);
    // console.log(rst);

    // req.app.get("io").to(req.params.channel).emit("new-message", one);

    return res.status(201).json({ message: "다이렉트 메시지 저장에 성공하였습니다.", item: rst });
});
// 다이렉트 메시지 목록
router.get("/:channel/message", async (req, res) => {
    console.log(req.params.channel);
    try {
        const data = await relationship.findOne({ _id: req.params.channel }).populate("ownerDetail").populate("opponentDetail");
        const messages = await message.find({ channel: req.params.channel }).sort("timestamp");
        return res.status(200).json({ relationship: data, messages: messages });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
})



module.exports = router;