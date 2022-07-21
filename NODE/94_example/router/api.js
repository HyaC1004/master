const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const accounts = require("../collections/accounts");


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

module.exports = router;