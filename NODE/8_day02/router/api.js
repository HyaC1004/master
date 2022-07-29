const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const Movie = require("../model/Movie");
router.use(express.json());

router.get("/match",async (req,res)=>{
    try{
        let result = await Movie.find({}).where("movieNm").regex(req.query.mvNm).select("movieNm -_id").lean();    
        // console.log(result);
        res.json(result);
    }catch(e){
        console.log(e.message);
    }
    
    
});


module.exports = router;