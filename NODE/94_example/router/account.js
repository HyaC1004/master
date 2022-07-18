const express = require("express");
const router = express.Router();

const accounts = require("../collections/accounts");

router.use( (req, res, next)=>{
    if(req.session.user) {
        res.redirect("/user/user");
    } 
    next();
});
router.get("/",(req,res)=>{
    res.redirect("/signin");
});

// 회원가입
router.route("/signup")
    .get(async(req,res)=>{
        res.render("signup",{msg:""});
    })    
    .post(async(req,res)=>{
        let obj = {
            _id: req.body.id,
            password: req.body.password,   
            name : req.body.name,
            email : req.body.email,
            contact : req.body.contact,
            birth : {
                year : req.body.year,
                month : req.body.month,
                day : req.body.day
            }
        };
        console.log(obj);
        try{
            let result = await accounts.insertOne(obj);            
            if (result.acknowledged) {
                res.redirect("/account/signin");
            } else {
                res.render("/account/signup");
        }}catch(e){
            res.render("signup", {msg :"이미 존재하는 아이디입니다."});    
        }
    });
// 로그인
router.route("/signin")
    .get(async(req,res)=>{
        res.render("signin",{msg:""});
    })
    .post(async(req,res)=>{         
        try{
        let pass = await accounts.findById(req.body.id);        
        if(pass.password === req.body.password){     
            req.session.user = pass; 
            res.redirect("/user/user");
        }else{     
            res.render("signin", {msg :"비밀번호가 틀렸습니다."});
        }} catch(e){
            res.render("signin", {msg :"존재하지 않는 아이디입니다."});
        }    
    });



module.exports = router;