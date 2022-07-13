const express = require("express");

const webtoonRouter = require("./router/webtoon");

const app = express();
/*
    가장 많이 쓰이는 형태의 라우팅 처리는 Router라는 클래스를 활용하는 방법이다.
    Router / 이식 가능한 형태 라우팅 핸들러들
*/


app.use("/webtoon",webtoonRouter);
// app.use("/member",memberRouter);
// app.use("/game",gameRouter);

app.listen(8080,()=>{
    console.log("START");
});