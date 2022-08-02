
const mongoose = require("mongoose");
const Movie = require("./model/Movie")



!async function () {
    const uri = "mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, { dbName: "example" });
    //=======================================================================================================
    // Model 에서 CRUD 관련 function을 사용하면 결과는 쿼리라는 객체가 만들어지게 되고
    // 그 상태에서 추가로 mongoose.Query 객체의 function 들을 chaning 해서 사용가능하다.
    // 0. select    / "movieNm repGenreNm"  / ["movieNm","repGenreNm"]  / {movieNm:1,repGenreNm:1}
    //                문자열로 설정시에 앞에 -는 exclude 제외             객체로 표시할떄는    0으로 설정하면됨
    // let result = await Movie.find({}).select("-_id movieNm").exec();
    // console.log(result);


    // 1. contDocuments()
    // let cnt = await Movie.find({ repGenreNm: "액션" }).countDocuments();
    // console.log(cnt);


    // // 2. skip(), limit()    : paging
    // let result = await Movie.find({ repGenreNm: "액션" }).select("movieNm -_id").skip(3).limit(3);
    // console.log(result);
    // 3. sort() : 객체 형태나 문자열로 처리가 가능     {prdtYear:-1,openDt:1}  // asc 1(오름차순)    desc -1(내림차순)
    let result = await Movie.find({ repGenreNm: "애니메이션" }).select("movieNm prdtYear openDt").sort("-prdtYear -openDt").lean();
    // mongoose find 의 결과는 mongodb 드라이버로 find 했을때와는 다르게 모델 상태이다.
    // console.log(result[0] instanceof mongoose.Model);
    // console.dir(result[0])
    console.table(result);

    // + leam() ===> 쿼리로 결과로 Mongoose Model 이 아니라 plain Javascript object 로 만들어짐. 

    // distinct 특정필드의 데이터들중 중복값 제거

    let rst4 = await Movie.find({}).distinct("repGenreNm");
    console.log(rst4);

}();