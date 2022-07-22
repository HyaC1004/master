const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const accounts = require("../collections/accounts");
const articles = require("../collections/articles");
const { ObjectId } = require("mongodb");
router.use(express.json());

router.get("/idcheck",async (req,res)=>{
    // console.log("get /api/check", req.method);
    let found = await accounts.findById(req.query.id);
    // console.log(found);
    const result= {};
    if(found){
        result.success = false;
    }else{
        result.success = true;
    }
    console.log(result);
    res.json(result);
});

router.post("/comment",async(req,res)=>{    
    // console.log("req.body :" , req.body);
    let targetId = req.body.articleId;
    // console.log(targetId);
    let obj = {
        _id : new ObjectId(),
        commenterId : req.session.user._id,
        commenterName : req.session.user.name,
        commenterImage : req.session.user.image,
        message : req.body.message,
        createdAt : new Date().toLocaleString()
    }
    await articles.addComment(targetId,obj);    
    let found  = await articles.findByTargetId(targetId);
    let result = {
        success : true,
        comment : found.comment
    }
    res.json(result);
})

router.post("/delete",async(req,res)=>{
    let articleId = req.body.articleId;
    let commentId = req.body.commentId;
    let commenterId = req.body.commenterId;
    let user = req.session.user._id;
    // console.log("현재유저: ",user);
    // console.log("댓글유저: ",commenterId);
    // console.log(targetId);
    let result = {};
    // console.log(req.body);    
    if(user===commenterId){
        result.success = true;
        await articles.deleteComment(articleId,commentId);        
    } else {
        result.success = false;        
    }
    res.json(result);
})



module.exports = router;