const express = require("express");

const router = express.Router();
const namePool = [];

router.get("/login", (req, res)=>{
    return res.render("login",{msg:""});
});
router.get("/session", (req, res)=>{    
    if(namePool.includes(req.query.nick)){
        return res.render("login",{msg:"이미 사용된 이름입니다."});
    } else {
        req.session.nick = req.query.nick;
        namePool.push(req.query.nick);       
        res.redirect("/game/start");
    }
});


module.exports = router;
