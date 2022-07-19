const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
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
/* const uploadProfile = multer({
    storage: multer.diskStorage({
        destination : function(req,file,cb) {
            const dest = path.join(__dirname,"profile",req.body.id);          
            if(!fs.existsSync(dest)){
                fs.mkdirSync(dest,{recursive:true});
            }        
            cb(null,dest);
        },
        filename : function(req, file, cb) {           
            let arr = file.originalname.split(".");
            arr[0] = Date.now();
            let newName = arr.join(".");
            cb(null,newName);
        }
    }),
    fileFilter : function(req, file, cb) {
        if(file.mimetype.startsWith("image")){
            cb(null,true);
        }else{
            cb(null,false);
        }
    }
}); */
router.route("/signup")
    .get(async(req,res)=>{
        res.render("signup",{msg:""});
    })    
    .post(async(req,res)=>{
        console.log(req.file,req.body);
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