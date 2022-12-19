const express = require("express");
const jwt = require("jsonwebtoken");
const { on } = require("../models/relationship");
const relationship = require("../models/relationship");
const user = require("../models/user");

const router = express.Router();

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

// 친구 목록 보내주기
router.get("/relationship", async (req, res) => {
    const requester = req.data.user.email;
    // owner == 요청보낸 사람 혹은 opponent 가 요청보낸 사람
    const datas = await relationship.find({ $or: [{ owner: requester }, { opponent: requester }] }).sort("created_at");
    const cvtDatas = datas.map((one) => {
        // console.log("!!!", one);
        let user = requester === one.owner ? one.opponent : one.owner;
        let type;
        if (one.accepted_at) {
            type = 1;   // 서로 수락
        } else {
            type = requester === one.owner ? 3 : 4;
        }
        return { created_at: one.created_at, user: user, type: type };
    });
    return res.status(200).json(cvtDatas);
});

// 친구 추가 요청 처리 {oppenent : "totoro@gmail.com"}
router.post("/relationship", async (req, res) => {
    const owner = req.data.user.email;
    const { opponent } = req.body;  // 상대방의 이메일
    if (owner === opponent) {
        return res.status(400).json({ message: "자기 자신에게는 요청을 보낼 수 없습니다." });
    }
    const found = await user.findOne({ email: opponent });
    if (!found) {
        return res.status(400).json({ message: "상대방이 없습니다" });
    }
    const data = await relationship.findOne({
        $or:
            [
                { owner: owner, opponent: opponent },
                { owner: opponent, opponent: owner },
            ]
    });
    if (data) {
        return res.status(400).json({ message: "이미 존재하는 요청입니다." });
    }

    // 1: 서로 수락한 상태 ,  3: 받은 요청 , 4 : 보낸요청 
    // 요청보낸사람의 이메일 값이 필요한데, 
    // 프론트에서 토큰을 보내서, 백엔드에서 추출해도 될것 같고,
    // 프론트에서 요청을 보낼때 바디에 설정해서 보내도 될 것 같음.
    const one = {
        created_at: new Date(),
        owner: owner,
        opponent: opponent
    };
    // console.log(one);
    await relationship.create(one);
    // 요청을 당한사람의 소켓아이디를 찾아야됨. == 위에 찾아놈.
    if (found.sid) {
        const io = req.app.get("io");
        io.to(found.sid).emit("add-friend-req", {
            created_at: one.created_at,
            user: owner,
            type: 4
        });
    }



    // console.log({ message: `${opponent} 에게 성공적으로 친구 요청을 보냈습니다.` })
    return res.status(201).json({ message: `${opponent} 에게 성공적으로 친구 요청을 보냈습니다.` });
});



module.exports = router;