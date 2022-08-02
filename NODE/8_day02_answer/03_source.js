
const mongoose = require("mongoose");
const Movie = require("./model/Movie")



!async function () {
    const uri = "mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, { dbName: "example" });

    // 02 source.js 살펴본거는 자주 사용되는 필수적인 쿼리헬퍼
    // 이번에 살펴볼꺼는 알아둬도 괜찮은 유용한 쿼리 function

    // 조건 설정하는 법이 mongodb이 쉽지는 않다.
    // openDt 가 20220701 이후의 데이터를 찾는다면?
    // let result = await Movie.find({ "openDt": { $gte: "20220801" } }).select("movieNm openDt").lean();

    let result = await Movie.find({}).where("openDt").gte("20220801").select("movieNm openDt").lean();
    // console.table(result)

    // repGenreNm 이 액션 이거나 혹은 드라마 인 데이터를 찾는 다면 or 나 in

    // let result2 = await Movie.find({ "reqGenreNm": { $in: ["액션", "드라마"] } }).select("movieNm repGenreNm -_id").lean();
    let result2 = await Movie.find().where("repGenreNm").in(["액션", "드라마"]).select("movieNm repGenreNm -_id").lean();
    // console.table(result2);

    let result3 = await Movie.find({}).where("movieNm").regex("귀멸").lean();
    // await Movie.find({}).where("movieNm").regex("귀멸").countDocuments();
    // console.log(result3);


}();