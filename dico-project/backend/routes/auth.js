const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const router = express.Router();


router.post("/register", async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ message: "사용자 입력 값이 부족합니다." });
    }
    const one = await user.findOne({ email: email });
    if (one) {
        return res.status(400).json({ message: "이미 등록되어 있는 이메일입니다." });
    }

    const hashedPW = bcrypt.hashSync(req.body.password, 12);
    try {
        const newOne = {
            email, password: hashedPW, name, authed: false
        }
        await user.create(newOne);
        return res.status(201).json({ message: "정상 처리되었습니다." });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "사용자 등록중 오류가 발생하였습니다." });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const one = await user.findOne({ email: email });

        if (one && bcrypt.compareSync(password, one.password)) {
            const token = jwt.sign({ user: { email: one.email, name: one.name } },
                "a28b865e94826463d56fe7708a527cd2",
                { expiresIn: "7d" }
            );
            // console.log(token);
            return res.status(200).json({ token: token, message: "정상 처리되었습니다." });
        } else {
            return res.status(401).json({ message: "아이디 또는 비밀번호가 일치하지 않습니다." });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "사용자 등록중 오류가 발생하였습니다." });
    }
});


router.post("/session", async (req, res) => {
    const authorization = req.get("authorization");
    if (!authorization) {
        return res.status(401).json({ message: "인증 값이 존재하지 않습니다." });
    }
    if (authorization.startsWith("Bearer")) {
        //  console.log(authorization);
        const token = authorization.split(/\s/)[1];
        try {
            const payload = jwt.verify(token, "a28b865e94826463d56fe7708a527cd2");
            // console.log(payload);   // { user: { email: one.email, name: one.name } }
            return res.status(200).json(payload);
        } catch (e) {
            return res.status(401).json({ message: "유효하지 않은 토큰 값입니다." });
        }
    } else {
        return res.status(401).json({ message: "지원되지 않는 밸류입니다." });
    }
});



module.exports = router;