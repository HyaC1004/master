
const express = require("express");
const router = express.Router();

const names = [];

router.get("/login", (req, resp)=>{
    // req.path 값과 req.baseUrl 도 체크
    // resp.send(req.originalUrl);  
    resp.render("login", {msg :""});
});
router.get("/session", (req, resp)=>{
    if(names.includes(req.query.name) ) {
        resp.render("login", {msg :"이미 사용된 이름입니다."});
    } else {
        names.push(req.query.name);
        req.session.name = req.query.name;
        resp.redirect("/game/start");
    }
    // resp.send(req.originalUrl);
});







module.exports = router;