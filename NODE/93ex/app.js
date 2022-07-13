const express = require("express");
const path = require("path");

const app = express();
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

const gameRouter = require("./router/game");
const session = require("express-session");

app.use(session({
    secret: "game"
}));

app.use("/game",gameRouter);




app.use((req,res,next)=>{
    console.log("NOT FOUND");
    res.send("당신이 요청하신 경로는 없는 경로입니다.")
})


app.use((error,req,res,next)=>{
    res.send("<h2>서버측의 작업 오류로 당신의 요청을 처리 하지 못했습니다.</h2>");
    console.log(error);
    console.log(error.message);
});
app.listen(8080,()=>{
    console.log("START");
});