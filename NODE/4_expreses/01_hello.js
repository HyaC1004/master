const express = require("express");
const path =  require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"view") );
//=========================================================
app.use(express.static(path.join(__dirname,"public")));
app.use((req,res,next)=>{   // 매개변수 3개를 써야함
    console.log("use custom middleware-1");
    // res.send("이 메시지는 미들웨어에서 전송함"); // send 2번시키면 안댐
    next();
});
app.use((req,res,next)=>{  // 쓰여진 순서대로 실행
    console.log("use custom middleware-2");
    // res.send("이 메시지는 미들웨어에서 전송함"); 
    next();
});

app.get('/',(req,res)=>{
    res.send("HELLO WORLD!");
});
app.get("/notice",(req,res) =>{
    // send전송은 text/html; charset=utf-8 이다
    res.send("<h2>공지사항</h2> ");   
});
app.get("/help",(req,res) =>{
    // 이미 만들어진 HTML을 전송하려면..?
    res.sendFile(path.join(__dirname,"view","help.html"));
});
app.get("/inform",(req,res)=>{
    res.render("inform", {
        array : ["월","화","수","목","금"]
    });
});
app.get("/private",(req,res)=>{
    res.redirect("/");
});
app.get("/code",(req,res)=>{
    res.sendStatus(401);
});


app.listen(8080,()=>{
    console.log("START");
});
