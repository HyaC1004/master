/*
    express 서버 하나 작동시키고
    /upload [GET] 일때 uploadFrom.ejs파일 렌더링 되게
        라우터핸들러 처리
*/
const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"view"));
// post method; application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));
// post method: multipart/form-data를 처리하려면?
// 이 요청 방식을 처리할 미들웨어를 사용하면 된다.
// formidable, multer 같은 것들이 multipart요청을 처리라는 대표적인 미들웨어이다.
// multer 미들웨어를 이용해서 처리해볼꺼고 사용하기 위해 npm i multer
app.get("/upload",(req,res)=>{
    res.render("uploadForm",{});
});
//==============================================
const upload = multer({dest:path.join(__dirname,"uploads")});
// array 같은이름파일 여러개 fields 다른이름 여러개
app.post("/uploaded",upload.single("attach"),(req,res)=>{
    console.log(req.body.desc);     // 일반 텍스트는 body에 설정
    // console.log(req.body.attach);   
    console.log(req.file);
    res.sendStatus(200);
});
//================================================
// multer를 사용할때 세팅을 변경해서 처리해보자
// 예를 들어서, 업로드되는 이름을 우리가 지정해본다거나.. 등등

const testUpload = multer({storage: multer.diskStorage({
    destination : function(req,file,cb) {
        const dest = path.join(__dirname,"upload",req.body.uploader);
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest);
        }        
        cb(null,dest);
    }
})});
app.route("/test")
    .get((req,res)=>{
        res.render("test");
    })
    .post(testUpload.single("attach"),(req,res)=>{
        console.log(req.file);
        res.sendStatus(200);
    });



app.listen(8080,()=>{
    console.log("START");
});

