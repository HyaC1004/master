const express = require("express");
const jwt = require("jsonwebtoken");
const { on } = require("../models/relationship");
const relationship = require("../models/relationship");
const user = require("../models/user");

const router = express.Router();

// router.use((req, res, next) => {
//     const authorization = req.get("authorization");
//     if (!authorization) {
//         return res.status(401).json({ message: "인증 값이 존재하지 않습니다." });
//     }
//     if (authorization.startsWith("Bearer")) {
//         const token = authorization.split(/\s/)[1];
//         const payload = jwt.verify(token, "a28b865e94826463d56fe7708a527cd2");
//         // console.log(payload);   // { user: { email: one.email, name: one.name } }
//         req.data = payload;
//         next();
//     } else {
//         return res.status(401).json({ message: "지원되지 않는 밸류입니다." });
//     }
// });
router.post("/:channel/message", async(req, res)=>{
    const one = {
        author: req.body.author,
        comment: req.body.comment,
        timestamp: new Date()
    }
    await relationship.updateOne({_id:req.params.channel}, {$push:{
        messages: one
    }});
    return res.status(201).json({message: "DM 저장에 성공"})
})
router.get("/:channel/message",async(req,res)=>{
    console.log(req.params.channel);
    const data = await relationship.findOne({_id: req.params.channel})
    res.status(200).json({data:data});
})

module.exports = router;