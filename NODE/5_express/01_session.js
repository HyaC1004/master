/*
    session 직접 만들어서 제어하는게 굉장히 불편한 작업니다.

    express로 서버 구축할때는 cookie-session이나 express-session 중에 
    하나를 선택해서 그 미들웨어를 통해 세션을 사용한다.        
*/
const express = require("express");
const app = express();

/* 
    // 서버를 껏다 켜도 세션이 그대로 (브라우저에서 관리)
    const session = require("cookie-session");
    app.use(session({
        name:"session",
        keys: ["abc","def"]
    }));
*/

// 서버를 껏다 키면 세션이 초기화 (서버에서 관리)
const session = require("express-session");
app.use(session({   
    secret: "mern"
}));

const study = require("./router/study");

app.use("/study",study);


app.listen(8080,()=>{
    console.log("START");
});