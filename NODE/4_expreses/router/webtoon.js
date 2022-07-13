/*
    webtoon url router configuration
*/
const express = require("express");

const router = express.Router();
router.use((req, resp, next)=>{
    console.log("log by anonymous middle ware");
    next();
});
router.get("/", (req, resp)=>{
    resp.send("이 응답은 " + req.path+" 에서 만들어짐 : " + req.baseUrl);
});
router.route("/mode")
    .get((req,resp)=>{
        resp.send("이 응답은 " + req.path+" 에서 만들어짐 (GET) : " + req.baseUrl);
    })
    .post((req, resp)=>{
        resp.send("이 응답은 " + req.path+" 에서 만들어짐 (POST) : " + req.baseUrl);
    });


module.exports = router;
