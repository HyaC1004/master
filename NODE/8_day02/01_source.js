const mongoose = require("mongoose");
const Movie = require("./model/Movie");


!async function() {
    const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri,{dbName: "example"});
    //==================================================
    let result;

    result = Movie.find({});  //CURD에 사용되는 이런 function의 결과물은 Promise가 아니라 Query 라는 객체임

    console.log(result instanceof mongoose.Query);  // 이걸 Promise 같이 await / then을 쓰게 되면 Promise 같이 작동은 함

    // result.then((doc)=>{
    //     console.log(doc);
    // });
    // console.log(await result);

    result =await Movie.find({genreAlt: "코미디"}).exec();
    //  console.log(result, result instanceof Promise);
    // console.log(result);
    // 쿼리객체는 체이닝해서 사용할수 있다.

    result = await (await Movie.find({repNationNm:"한국"})).findIndex({repGenreNm:"액션"}).find({prdtYear:"2021"});
    //쿼리상태에서 then 혹은 await를 하면 exec()가 암묵적으로 수행된다.
    console.log(result);



}();