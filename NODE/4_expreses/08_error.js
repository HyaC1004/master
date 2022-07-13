const express = require("express");
const app = express();

// 환율 계산 서비스 query로 won 전달받았을 때 달러로 계산해주기
app.get("/exchange",(req,res)=>{
    let won = req.query.won.toFixed(0);
    let dollar = won/1304;
    // res.send(200);  // 숫자를 보내면 상태코드로 인식한다.
    res.send(`${won}원을 달러로 환전하면 ${dollar}$ 입니다.`);
});

// 에러처리용 미들웨어 항상 인수가 4개 - 맨밑에 작성을 해야한다.
// 라우트핸들러 작업중에 발생하는 에러들을 처리함.
// 없는 요청을 하는 것 자체는 에러가 아니기에 여기서 처리가 안됨.
// 404 NOT FOUND 를 처리하고 싶으면
app.use((req,res,next)=>{
    console.log("NOT FOUND");
    res.send("당신이 요청하신 경로는 없는 경로입니다.")
})


app.use((error,req,res,next)=>{
    res.send("<h2>서버측의 작업 오류로 당신의 요청을 처리 하지 못했습니다.</h2>");
    console.log(error);
    console.log(error.message);
});
app.listen(8080);