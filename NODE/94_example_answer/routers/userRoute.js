const express = require("express");

const router = express.Router();

router.use((req, resp, next)=>{
    if(!req.session.auth) {
        return resp.redirect("/account/signin");
    }
    next();
});

router.get("/myinfo", (req, resp)=>{
    resp.render("user/myinfo", {user : req.session.user});
});
router.get("/exit", (req, resp)=>{
    req.session.auth = null;
    req.session.user = null;
    // req.session.destroy();
    resp.redirect("/account/signin");
});


module.exports = router;