const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const Expend = require("../models/Expend");

router.use( (req, res, next)=>{
    if(req.session.user) {
        res.redirect("/book/accountbook");
    } 
    next();
});

router.route("/login")
    .get((req, resp) => {
        resp.render("account/login",{msg:""});
    })
    .post(async(req,resp)=>{
        let data= {...req.body};
        let rst = await Account.findOne({email:req.body.email});
        if(rst){
            if(rst.password === req.body.password){
                console.log("login!");
                req.session.user=rst;
                resp.redirect("/book/accountbook");
            } else {
                resp.render("account/login", {msg :"비밀번호가 틀렸습니다."});
            }
        }else{
            await Account.create(data);
            console.log("sign up!")
            resp.redirect("/book/accountbook");
        }
    })

module.exports = router;
