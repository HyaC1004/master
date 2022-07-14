const express = require("express");

const router = express.Router();
router.use((req,res,next)=>{
    if(!req.session.nick){
        res.redirect("/account/login");
    }
    next();
});

router.get("/start", (req, res)=>{        
    return res.render("game",{nick: req.session.nick});  
});

module.exports = router;
