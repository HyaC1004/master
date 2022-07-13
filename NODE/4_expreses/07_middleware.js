const express = require("express");

const app = express();

app.use((req,res,next)=>{
    req.time = new Date();
    next();
});
app.all("/",(req,res)=>{
    console.log(req.time);
    res.send("<h3>오키도키</h3>");    
});
/* 
    이 상태로 해보고 /chain url 출력결과를 한번 살펴보고             // step1 - 2 - final
    step1 next() 주석 처리하고 결과를 한번 살펴보고                  // step1
    step1 next() 살리고 step2의 next() 주석처리하고 살펴보고        // step1 - 2
    step1 next("route") 안에 아무 문자열이나 설정해서 살펴보고      // step1 - 
        -- route일때 /chain - final 출력    // 그외 문자열은 입력한 문자열 출력 
*/
app.get("/chain",(req,res,next)=>{
    console.log("/chain - step1");
    next("route");
},(req,res,next)=>{
    console.log("/chain - step2");
    next();
});

app.get("/chain",(req,res)=>{
    console.log("/chain - final");
    res.status(200).send("end");
});



app.listen(8080,(req,res)=>{
    console.log("START");
})