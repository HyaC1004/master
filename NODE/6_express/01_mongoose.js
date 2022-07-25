/*
    몽구스(mongoose) / Object Document Mapping
    MongoDB object modeling tool

    가장 큰 특징은 스키마를 정의하고 사용하는 것
    몽구스의 모든 것은 스키마로 시작합니다.
    각 스키마는 MongoDB 컬렉션에 매핑되고 해당 컬렉션 내 문서의 모양을 정의합니다.
*/

const mongoose = require("mongoose");

// https://mongoosejs.com/docs/connections.html
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{ dbName : "example"});

mongoose.connection.on("error",err=>{
    console.log("MongoDB error : " + err.message);
});
mongoose.connection.on("open",()=>{
    console.log("MongoDB connected.");
});
//=====================================================
// mongoose를 통해서 Data 제어를 하려면 Schema 부터 설계를 해야 된다.

const foodSchema = mongoose.Schema({
    name: {type: String, required : true},
    calorie: Number,     // type 설정만 할꺼라면 이런식으로 축약표현 가능
    amount: {
        unit : String,
        gram : Number
    },
    category : {type: String, default : "-"}
});
//=====================================================
// 이 스키마라는 걸 이용해서 모델이라는 걸 만들어서 사용하게 된다

const food = mongoose.model("food", foodSchema);    // foods라는 컬렉션으로 관리가 됨.