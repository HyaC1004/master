const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const articles = require("../collections/articles.js");


// multer config
const attachUpload = multer({
    storage: multer.diskStorage({
        destination : (req, file, cb)=>{
            const uploadPath = path.join(__dirname,"..","static","attaches",req.session.user._id);
            if(!fs.existsSync(uploadPath)){
                fs.mkdirSync(uploadPath);
            }
            cb(null,uploadPath);
        },
        filename : (req, file, cb)=>{            
            let newName = Date.now()+"_"+parseInt(Math.random()*1000)+ path.parse(file.originalname).ext;            
            console.log(file);
            // let newName = Date.now() + "." + file.originalname.split(".")[1];
            cb(null,newName);
        }
    })
})
router.route("/home")
    .get(async(req,res)=>{
        if(req.session.user){
            //console.log(req.session.user);
            //let obj = await accounts.findById(req.session.user._id);   
            //await articles.findByType         
            let array = await articles.findAll();
            array = array.filter(elm=>{                
                return ((elm.type == "public")||(elm.writerId == req.session.user._id));
            })
            
            res.render("home",{obj : req.session.user, array});
        }else{
            res.redirect("/account/signin");
        }
    })
router.post("/upload",attachUpload.array("attach"),async(req,res)=>{
    // let fileNames = req.files.forEach(rst =>{
    //     return `/attaches/${req.session.user._id}/${rst.filename}`;
    // })
    let fileNames = req.files.map(rst =>{
        return `/attaches/${req.session.user._id}/${rst.filename}`
    })
    // console.log(req.files);
    // console.log(fileNames);
    let obj = {
        writerId: req.session.user._id,
        writerName: req.session.user.name,
        writerImage: req.session.user.image, 
        type: req.body.type,
        post : req.body.post,
        createdAt : new Date(),
        attach :  fileNames,
        comment : []
    }
    //console.log(req.files);
    
    await articles.insertOne(obj);
    res.redirect("/article/home");
})

router.route("/view")
    .get(async(req,res)=>{
        if(req.session.user){
            let targetId = req.query.articleId;
            let target = await articles.findByTargetId(targetId); 
            let comment = target.comment;       
            // console.log(comment);
            res.render("view",{obj : req.session.user,comment,target,targetId});
        }else{
            res.redirect("/account/signin");
        }
    })
    .post(async(req,res)=>{
        let obj = req.body.comment;
        let targetId = req.body.articleId;
        await articles.addComment(targetId,obj);

        res.redirect("/article/view?articleId="+req.body.articleId);
    })









module.exports = router;