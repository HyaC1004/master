const express = require("express");
const web = require("./router/web")
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Movie = require("./model/Movie");
const Review = require("./model/Review");
const uri = "mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { dbName: "example" });
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use("/movie", web);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/reviews", async (req, resp) => {
    // 모든 리뷰 정보들
    const datas = await Review.find({}).populate("target", "movieNm").sort("-createdAt").lean();
    resp.locals.datas = datas;
    console.log(datas[0]);
    resp.render("reviews");

});

app.get("/info", async (req, resp) => {
    // 영화 상세보기하는 곳 :해당 영화의 정보와 해당영화로 달린 코멘트들 + 해당영화에 코멘트를 달 수 있는 폼 제공
    const movie = await Movie.findById(req.query._id).lean();
    const reviews = await Review.find({ target: req.query._id }).sort("-createdAt").lean();
    // 리뷰가 있다면 score 평균을 낼수도 있을거임.
    let avg = 0
    reviews.forEach((elm) => {
        avg += elm.score
    })
    resp.locals.avg = (reviews.length!==0) ? (avg / reviews.length).toFixed(1) : "평가 없음"
    resp.locals.movie = movie;
    resp.locals.reviews = reviews;
    resp.render("review")
});

// 리뷰 등록 처리하는 곳 :

app.post("/create", async (req, resp) => {
    // target , score , comment
    console.log(req.body);
    Review.create(req.body).then(() => {
        resp.redirect("/info?_id=" + req.body.target);
    }).catch((e) => {
        resp.status(500).send(e.message);
    })
});


app.get("/api/match", (req, resp) => {
    // {movieNm : new RegExp(req.query.mvNm)}
    Movie.find({}).where("movieNm").regex(req.query.mvNm).select("movieNm -_id").lean()
        .then((result) => {
            // console.log(result);
            resp.json(result)
        }).catch((e) => {
            resp.sendStatus(500);
        })
})

app.listen(8080);


