// 마이페이지
const express = require("express");
const router = express.Router();

const accounts = require("../collections/accounts");

router.get("/",(req,res)=>{
    res.redirect("/user");
});

router.get("/user",async(req,res)=>{
    if(req.session.user){
        console.log(req.session.user);
        let obj = await accounts.findById(req.session.user._id);
        res.render("user",{obj});
    }else{
        res.redirect("/account/signin");
    }
});

// 로그아웃
router.get("/logout",(req,res)=>{
    if(req.session.user){
        req.session.destroy(err=>{
            if(err) throw err;
            res.redirect("/account/signin");
        })
    }else{
        res.redirect("/account/signin");
    }
});

module.exports = router;