const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    target: String,     // 관광지 ID
    writer: String,     // 작성자
    comment: String,    // 남긴 글
    score: Number,       // 평점(1~5)
    photos: {type:Array, default:[]}
});

module.exports = mongoose.model("Review",reviewSchema);