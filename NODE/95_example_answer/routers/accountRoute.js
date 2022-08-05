const express = require("express");
const router = express.Router();


router.route("/login")
    .get((req, resp) => {
        // console.log(req.session.id);
        // req.session.id ="fdsafdsfs";

        console.log(req.sessionID);

        resp.render("account/login");
    })
    .post(async (req, resp) => {
        req.session.auth = true;
        req.session.userId = req.body.loginid;
        resp.redirect("/chats")
    });

module.exports = router;
