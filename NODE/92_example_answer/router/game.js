
const e = require("express");
const express = require("express");

const router = express.Router();

router.use( (req, resp, next)=>{
    if(!req.session.name) {
        return resp.redirect("/account/login");
    } 
    next();
});

router.get("/start", (req, resp)=>{
    resp.render("game", {player : req.session.name });
  
});


module.exports = router;