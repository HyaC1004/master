const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded());

app.get("/req/1",(req,res)=>{
    /*  ?week=sun&rank=45 { week: 'sun', rank: '45' }
        ?week=sun&rank=45&rank=11 { week: 'sun', rank: [ '45', '11' ] } */
    console.log(req.query); // 쿼리스트링이 parsing되서 객체로 설정되있음
    console.log(req.ip);    // 요청자의 IP
    console.log(req.cookies);   // 사용자 쿠키값이 나오려면 외부 미들웨어를 설치해야댐
    
    console.log(req.method);
    res.sendFile(path.join(__dirname,"view","form.html"));
});
app.get("/req/2",(req,res)=>{   // body가 아니라 쿼리
    console.log("get", req.query);
    res.send("오케이");
});
app.post("/req/2",(req,res)=>{  // 쿼리를 사용하지 않고 body로 받음
    console.log("post",req.body);
    res.send("오케이 "+req.body.visitor+"님 땡큐");
});

app.listen(8080);