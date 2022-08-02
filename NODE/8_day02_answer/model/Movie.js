const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    movieCd: String,
    movieNm: String,
    movieNmEn: String,
    prdtYear: String,
    openDt: String,
    typeNm: String,
    prdtStatNm: String,
    nationAlt: String,
    genreAlt: String,
    repNationNm: String,
    repGenreNm: String,
    directors: [{ peopleNm: String }],
    companys: [{ companyCd: String, companyNm: String }],
})

movieSchema.virtual("key",{
    localField:"_id",
    ref: "Review",
    foreignField:"target"
})

module.exports = mongoose.model("Movie", movieSchema)