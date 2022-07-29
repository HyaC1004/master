const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const Movie = require("../model/Movie");

const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{dbName: "example"});

router.route("/")
    .get(async(req,res)=>{
        let filter = {};
        if(req.query.mvNm){
            // filter = {movieNm: new RegExp(req.query.mvNm)};
            filter.movieNm = new RegExp(req.query.mvNm);
            res.locals.mvNm = req.query.mvNm
        };
        if(req.query.grNm){
            // filter = {repGenreNm:{$in: req.query.grNm}};
            // filter = {repGenreNm:[value,value]}; ---> 자동으로 $in 처리해줌
            // filter.repGenreNm = {$in: req.query.grNm};            
            filter.repGenreNm = req.query.grNm;
            res.locals.grNm = req.query.grNm;
        }

        const cnt = await Movie.find(filter).countDocuments();
        const genres = await Movie.find({}).distinct("repGenreNm");

        let page = req.query.page ?? 1;
        let skipValue = (page-1)*10;
        let endPage = Math.ceil(cnt/10);

        const array = await Movie.find(filter).sort("movieNm").skip(skipValue).limit(10);
        //console.log(array);

        // 랜더를 하면서 설정하는 데이터들은 res객체의 locals라는 곳에 설정이 되고
        // ejs에서 불러다 쓰이게 되는데 
        res.locals.genres = genres;

        res.render("movie",{array,cnt,endPage})

        // res.locals.movies = array;
        // ejs 파일에서 데이터를 접근할때 locals 붙여서 접근을 할 필요가 꼭 
        // 있는건 아니지만 만약 붙인다면? not defined를 피할수 있다.
    })

module.exports = router;