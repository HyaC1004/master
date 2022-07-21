const express = require("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));


app.get("/",(req,res)=>{
    // res.render("index");
    res.render("send");
});
app.get("/api/dest",(req,res)=>{
    console.log("get /api/dest", req.method);
    // res.send("OKAY");
    let obj= {
        result : "success",
        count : 27,
        colors : ["red", "blue"]
    };
    let str = JSON.stringify(obj);
    console.log(str);
    console.log(str.result);

    let recover = JSON.parse(str);
    console.log(recover.result);
    
    res.json(obj);
});
app.get("/api/check",(req,res)=>{
    // 5글자 이상 true, 아니면 false
    console.log("get /api/check", req.method);
    let value = req.query.value;
    let obj = {};
    if(value.length>=5){
        obj.success= true;
    }else{
        obj.success= false;
    }
    console.log(obj);
    
    res.json(obj);
});

app.get("/api/add", (req, resp)=>{
    let o = Number.parseInt(req.query.one);
    let o2 = Number.parseInt(req.query.other);

    let result = {
        "success" : true,
        "answer" : o + o2
    };
    resp.json(result);
    console.log(result);
});




app.listen(8080,()=>{
    console.log("START");
});
