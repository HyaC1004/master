/*
    1st step
        mongoose 를 mongodb로 연결시켜줘야함
*/
const mongoose = require("mongoose");

// 몽구스로 몽고디비 연결을 잡아두는 방법은 여러가지가 있겠지만...
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
/* 
mongoose.connect(uri,(err)=>{
    console.log("connected"+err);
}); 
*/

/* 
mongoose.connect(uri,{dbName: "study", maxConnecting: 100 },(err)=>{
    if(err) {
        console.log("failed "+err.message);
    }else{
        console.log("connected");
    }
});
*/

mongoose.connect(uri,{dbName: "study"}).catch((err)=>{
    console.log("failed" + err.messsage);
});
