
const mongoose = require("mongoose");
const Movie = require("./model/Movie")



!async function () {
    const uri = "mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, { dbName: "example" });
    //=======================================================================================================
    let result;

    result = Movie.find({});    // CRUD에 사용되는 이런 function의 결과물은 Promise 가 아니라 Query 라는 객체임.

    console.log(result instanceof mongoose.Query);      // 이걸 Promise 같이 await / than 을 쓰게 되면 Promise 같이 작동은 함

    // result.then((doc) => {
    //     console.log(doc);
    // });
    // console.log(await result);

    result = await Movie.find({ repNationNm: "한국" }).exec(); // exec를 해야 Promise 객체가 나온다
    // result = await Movie.find({genreAlt:"코미디"});  // 해도 찾아지기는 한다. 위에가 정석일수도있다.
    // console.log(result, result instanceof Promise);
    // console.log(result);
    // 쿼리객체에는 체이닝 해서 사용할수 있다. 


    result = await Movie.find({ repNationNm: "한국" }).find({ repGenreNm: "액션" }).find({ prdtYear: "2021" }).exec()
    // 쿼리상태에서 then 혹은 await 를 하면 exec() 가 암묵적으로 수행된다.
    console.log(result);

}();