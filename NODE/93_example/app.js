const express = require("express");
const path = require("path");
const visitors = require("./collections/visitors");
const mongoose = require("mongoose");
const Visitor = require("./model/Visitor");
//const visitorsRouter = require("./router/visitors");

const app = express();

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"view"));
app.use(express.urlencoded({'extended':true}));

//app.use("/visitors",visitorsRouter);

app.route("/write")
    .get((req,res)=>{
        res.render("write",{});
    })
    .post(async(req,res)=>{    
        const obj = {
            name : req.body.name,
            password : req.body.password,
            comment : req.body.comment,
            createdAt : new Date()
        };    

        let result = await visitors.insertOne(obj);
        // let result2 = await Visitor.create(obj);
        if(result.insertedId) {
            res.redirect("/list");
            //res.send("데이터가 정상적으로 등록되었습니다.<a href='/list'>리스트로 가기</a>");
        }else{
            res.render("write");
            //res.send("데이터 등록 중 문제가 발생하였습니다. (code:-32)<a href='/write'>다시 작성하러 가기</a>");
        }
    });
app.get("/list",async(req,res)=>{
    let array = await visitors.findAll();    
    res.render("list",{array});    
});
app.route("/delete")
    .get((req,res)=>{
        res.render("valid",{target : req.query.id});
    })
    .post(async(req,res)=>{
        let t = await visitors.findById(req.body.target);
        if(t && t.password===req.body.password) {
            let result = await visitors.deleteById(req.body.target);
            res.redirect("/list");
        } else {
            res.redirect("/delete/?id="+req.body.target);
        }
    });
app.get("/delete",async(req,res)=>{
    let result = await visitors.deleteById(req.query.id);
    res.redirect("/list");
});
app.route("/update")
    .get(async(req,res)=>{
        let obj = await visitors.findById(req.query.id);
        res.render("update",{obj});        
    })
    .post(async(req,res)=>{
        const obj = {
            name : req.body.name,
            password : req.body.password,
            comment : req.body.comment
        };          
        let pass = await visitors.findById(req.body.id);
        if(pass.password === req.body.password){
            await visitors.updateById(req.body.id,obj);               
            res.redirect("list"); 
        }else{     
            res.send("비밀번호가 다릅니다.<a href='/list'>목록으로 가기</a>");
        }               
    });

app.listen(8080,()=>{
    console.log("START");
});