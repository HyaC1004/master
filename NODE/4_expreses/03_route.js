const { response } = require("express");
const express = require("express");
const path =  require("path");

const app = express();

function filter(req,res,next){
    console.log(`filtering at ${req.path}`);    // url.parse()===>pathname
    if(Math.random()>0.5){
        next();
    }else{
        res.redirect("/all")
    }
}
app.get("/gets",filter,(req,res)=>{
    res.send("/gets에서 요청처리함");
});
// GET 핸들러 (미들웨어)지원
app.get("/get",(req,res,next)=>{
    console.log("middleware")
    next();
},(req,res)=>{
    res.send("요청 정상적으로 받았음.")
})

app.all("/all",(req,res)=>{
    res.send("모든 요청방식(메서드)를 처리함.");
})






app.listen(8080,()=>{
    console.log("START");
})