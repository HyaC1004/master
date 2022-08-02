
const mongoose = require("mongoose");
const Movie = require("./model/Movie");
const Review = require("./model/Review");


!async function () {
    const uri = "mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, { dbName: "example" });

    // mongoose 의 populate .
        // 다른 컬렉션에서 데이터를 찾아와서 문서화 시켜주는 작업
        // 해당 필드의 값을 가지고 ref 설정해둔 모델에서 
        //  _id 가 같은 문서를 찾아서 교체(replace)해준다.
//    let reviews = await Review.find({}).populate("target","movieNm repGenreNm");

//    reviews.forEach((elm)=>{
//        console.log(elm.target.movieNm,elm.comment,elm.score);
//    });
   // 기본이 대상 ref 모델의 _id 로 매칭이 되는 거임.
   // 컬렉션 디자인이 잘못 되다 보면, _id가 아닌 데로 걸어야 될때가 있다.

    // ref 대상은 _id 로 고정이 되있다. 이걸 변경하려면 virtual 을 사용해야 한다.
   let reviews = await Review.find({}).populate("vtTargetCd");
//    console.log(reviews);

      reviews.forEach((elm)=>{
          console.log(elm.comment,elm.vtTargetCd);
      });





}();