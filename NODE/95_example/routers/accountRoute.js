const express = require("express");
const router = express.Router();

router.route("/signin")
    .get((req, resp) => {
        // console.log(req.session.id);
        // console.log(req.sessionID);
        resp.render("account/signin");
    })
    .post(async (req, resp) => {     
        req.session.auth = true;
        req.session.userId = req.body.loginid;
        resp.redirect("/chats")
    });

module.exports = router;
