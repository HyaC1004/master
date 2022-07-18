const express = require("express");

const router = express.Router();

router.use((req, resp, next)=>{
    if(!req.session.authUser) {
        return resp.redirect("/account/signin");
    }
    next();
});

router.get("/myinfo", (req, resp)=>{

    resp.render("user/myinfo",{user : req.session.authUser});
});

module.exports = router;