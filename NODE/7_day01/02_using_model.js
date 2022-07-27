const mongoose = require("mongoose");
const Hero = require("./model/Hero");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";

!async function() {
    await mongoose.connect(uri,{dbName: "study"});
    console.log("connected");

    // Hero 모델을 통해서 컬렉션을 제어할수 있게 된다.

    // 그중에서 Create 작업은 아래와 같은 방식으로 할 수 있다.
    // 1. Hero 모델을 통해서 저장할 문서 생성
    // const hero  = new Hero({name: "루피" , alias: "밀짚모자"});
    // await hero.save();

    // 2. 모델 객체의 create static function을 이용해서도 저장할 수 있다.
    // await Hero.create({name:"우솝", alias:"저격왕"});
    // console.log("저장 성공");

    // 3. inserMany static function을 이용해서 여러개를 한꺼번에 저장할 수 있다.
    // Hero.insertMany([{name:"상디", alias:"검은발"}]);

}();
