const express = require("express");
const path = require("path");

const router = express.Router();
router.use((req, resp, next)=>{
    next();
});
router.get("/", (req, res)=>{
    req.session.count = (req.session.count ?? 0) + 1;
    console.log(req.session);
    res.send(`<h2>안녕하세요!!!${req.session.nick}</h2>`);
});
router.get("/login", (req, res)=>{
    res.render("login",{msg:""});
});
router.get("/session", (req, res)=>{
    let query = req.query;   
    res.redirect("../game/start",{nick}) ;    
});


module.exports = router;
