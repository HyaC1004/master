const express = require("express");

const router = express.Router();


router.get("/start", (req, res)=>{
    //res.send("/game/start");
    res.render("game");
});

router.use((req, resp, next)=>{
    next();
});
module.exports = router;