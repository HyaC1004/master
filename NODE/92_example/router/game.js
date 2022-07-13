const express = require("express");

const router = express.Router();


router.get("/start", (req, res)=>{
    let nick = req.query.nick;
    req.session.nick = nick;
    res.render("game",{nick});
});

router.use((req, resp, next)=>{
    next();
});
module.exports = router;
