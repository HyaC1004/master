// 마이페이지
const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const accounts = require("../collections/accounts");

router.get("/",(req,res)=>{
    res.redirect("/user");
});
// multer config
const profileUpload = multer({
    storage: multer.diskStorage({
        destination : (req, file, cb)=>{
            const uploadPath = path.join(__dirname,"..","static","profile",req.session.user._id);
            if(!fs.existsSync(uploadPath)){
                fs.mkdirSync(uploadPath);
            }
            cb(null,uploadPath);
        },
        filename : (req, file, cb)=>{
            let newName = Date.now() + path.parse(file.originalname).ext;            
            // let newName = Date.now() + "." + file.originalname.split(".")[1];
            cb(null,newName);
        }
    })
})

router.route("/user")
    .get(async(req,res)=>{
        if(req.session.user){
            //console.log(req.session.user);
            //let obj = await accounts.findById(req.session.user._id);            
            res.render("user",{obj : req.session.user});
        }else{
            res.redirect("/account/signin");
        }
    })
    .post(profileUpload.single("profile"),async(req,res)=>{
        // let obj = await accounts.findById(req.session.user._id);
        // console.log(req.file);
        const url = `/profile/${req.session.user._id}/${req.file.filename}`;
        //if (req.file.size)
        await accounts.updateUserImage(req.session.user._id,url);
        req.session.user = await accounts.findById(req.session.user._id);
        console.log(req.session.user);
        res.redirect("/user/user");
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

// 정보변경

module.exports = router;