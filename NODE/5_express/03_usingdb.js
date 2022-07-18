const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority"

const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));

app.get("/insert",async(req,res)=>{
    const one = {
        name : req.query.name,
        age : Number.parseInt(req.query.age),
        gender : req.query.gender
    };
    const two = req.query;
    const client = new MongoClient(uri);    
    const students = client.db("study").collection("students");    

    let result = await students.insertOne(two);
    if(result.acknowledged) {
        res.send("데이터가 정상적으로 등록되었습니다.");
    }else{
        res.send("데이터 등록 중 문제가 발생하였습니다. (code:-32)");
    }
    client.close();
});
app.get("/list", async(req,res)=>{

    let filter = {};
    if(req.query.name) {
        filter.name= req.query.name;
    }

    const client = new MongoClient(uri);    
    const students = client.db("study").collection("students");

    const array = await students.find(filter).toArray();
  
    res.render("list",{array});    
    client.close();
});

app.listen(8080,()=>{
    console.log("START");
})