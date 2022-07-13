const express = require("express");

const app = express();

/*
    라우팅을 route 함수를 이용해서 해보려고 한다.
*/
// game이라는 url에 get,post를 따로 라우팅해보면?
/* 
    app.get("/game",(req,res)=>{

    });
    app.post("/game",(req,res)=>{

    }); 
*/
app.route("/game")
    .get((req,res)=>{
        res.send("[GET] /GAME");
    })
    .post((req,res)=>{
        res.send("[POST] /GAME");
    });


app.listen(8080,()=>{
    console.log("START");
});