const express = require("express");

const app = express();

// use는 미들웨어를 등록할때 쓰는 메서드
app.use("/product",(req,res,next)=>{    // 미들웨어에 url설정해주면 product 및 하위경로에 모두 적용 
    console.log("어플리케이션에 설정된 미들웨어");
    next();
    // res.send("<h2>/product</h2>");   // all과 비슷한거같지만 쓰면안댐, product/fdfewaf 아무렇게나 쳐도 다 작동
});

app.get("/product",(req,res)=>{
    res.send("<h1>/product</h1>")
});
app.get("/product/delete",(req,res)=>{
    res.send("<h1>/product/delete</h1>")
});
app.get("/game/record",(req,res)=>{
    res.send("<h1>/game/record</h1>")
});

app.listen(8080,()=>{
    console.log("START")
})

