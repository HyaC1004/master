const express = require("express");

const router = express.Router();

router.get("/", (req, res)=>{
    req.session.count = (req.session.count ?? 0) + 1;
    console.log(req.session);
    res.send(`<h2>안녕하세요!!!${req.session.nick}</h2>`);
});
router.get("/register", (req, res)=>{
    let nick = req.query.nick;
    req.session.nick = nick;
    res.send(`<h2>안녕하세요!!!스터디 페이지</h2>`);
});

module.exports = router;
