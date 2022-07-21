const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({extended:true}));   // 
app.use(express.json());    // 사용자 요청이 post일때 json파일 받으면 파싱해줌

app.get("/",(req,res)=>{
    res.render("postfetch");
});

// put, post, delete body로 요청
// data 수정 => put   data 삭제 => delete
app.put("/api/post", (req, res)=>{
    console.log("req.body " , req.body);

    const result = {"success":true};
    res.json(result);
});

app.post("/api/post", (req, res)=>{
    console.log("req.body " , req.body);

    const result = {"success":true};
    res.json(result);
});





app.listen(8080,()=>{
    console.log("START.!");
});

