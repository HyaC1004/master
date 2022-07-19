
/*
    express 서버 하나 작동시키고 (8080)
    /upload   [GET] 일때     uploadForm.ejs 파일 렌더링 되게
      라우터핸들러 처리
*/
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const multer = require("multer");
const e = require("express");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
// post method ; application/x-www-form-urlencoded 
app.use(express.urlencoded({extended:true}));
// post method : multipart/form-data 를 처리하려면?
// 이 요청방식을 처리할 미들웨어를 사용하면 된다.
// formidable  , multer 같은 것들이  multipart 요청을 처리하는 대표적인 middleware 이다.
// multer 미들웨워를 이용해서 처리해볼꺼고 사용하기 위해 npm i multer   
app.get("/upload", (req, resp)=>{
    resp.render("uploadForm");
});

//=======================================================
const upload = multer({dest : path.join(__dirname, "uploads")});
app.post("/uploaded", upload.single("attach"), (req, resp)=>{
    console.log(req.body.desc);
    console.log(req.body.attach);   // 일반 텍스트는 body 에 설정
    console.log(req.file);
    
    resp.sendStatus(200);
});
//===================================
// multer 를 사용할때 세팅을 변경해서 처리해보자.
// 예를 들어서, 업로드되는 이름을 우리가 지정해본다거나.. 등등

const testUpload = multer({
    storage : multer.diskStorage({
        destination : function (req, file, callback) {
            const dest = path.join(__dirname, "upload", req.body.uploader);
            if(!fs.existsSync(dest)) {

                fs.mkdirSync(dest, {recursive : true});
            }
            callback(null, dest);
        },
        filename :  function (req, file, callback) {
            // 파일을 저장할때 원본의 이름을 최대한 살리면서 겹치지 않게 시간설정값만? 추가
            // let newName = Date.now()+"_"+file.originalname;
            let arr = file.originalname.split(".");
            arr[0] = Date.now() ;
            let newName = arr.join(".");
            callback(null, newName);
        }
    }),
    fileFilter : function(req, file, callback) {
        if(file.mimetype.startsWith("image")){
            callback(null, true);
        } else {
            callback(null, false);
        }
    }
});

app.route("/test")
    .get((req, resp)=>{
        resp.render("test");
    })
    .post( testUpload.single("attach") , (req, resp)=>{
        console.log(req.file);
        if(req.file) {

        }else {
            
        }
        resp.sendStatus(200);
    });













app.listen(8080,()=>{
    console.log("SEVER START");
});