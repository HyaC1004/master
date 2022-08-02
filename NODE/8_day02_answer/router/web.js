const express = require("express");
const Movie = require("../model/Movie");
const router = express.Router();
const movie = require("../model/Movie")


router.get("/", async (req, resp) => {
    let filter = {};
    if (req.query.mvNm) {   // 값이 안넘어오거나 ""이면 작동 안함.
        // filter = { movieNm: new RegExp(req.query.mvNm) }
        filter.movieNm = new RegExp(req.query.mvNm);
        resp.locals.mvNm = req.query.mvNm;
    }
    // 변수를 이용해서 정규식을 만드려면 RegExp 생성자를 이용
    // new RegExp("귀멸") ==> /귀멸/
    // new RegExp("^"+"자바") ==> /^자바/
    if (req.query.grNm) {
        // filter = {repGenreNm:{$in:req.query.grNm}}
        // filter = {reqGenreNm : value/[value]}    ==> 자동으로 $in 으로 처리함
        // filter.repGenreNm = { $in: req.query.grNm }
        filter.repGenreNm = req.query.grNm
        resp.locals.grNm = req.query.grNm
    }
    console.log(filter);




    const cnt = await Movie.find(filter).countDocuments();
    let page = req.query.page ?? 1;
    let skipValue = (page - 1) * 10;
    const movies = await movie.find(filter).sort("movieNm").skip(skipValue).limit(10).lean();

    movies.forEach(data=>{
        data.movieNm = data.movieNm.replace(req.query.mvNm,"<b>"+req.query.mvNm+"</b>")
    })
    const genres = await Movie.find({}).distinct("repGenreNm");
    
    // resp.render("movie",{movie:movies});
    // 랜더를 하면서 설정하는 데이터들은 resp 객체의
    // locals 라는 곳에 설정이 되고 ejs에서 불러다 쓰이게 되는데
    resp.locals.movie = movies;
    resp.locals.cnt = cnt;
    resp.locals.endPage = Math.ceil(cnt / 10);
    resp.locals.genres = genres;

    resp.render("movie");
})






module.exports = router;