const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"ejs") );

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"static")));
const movies = [
    { id: "mv01", name: "토르 - 러브 앤 썬더", img: "/static/85999_320.jpg" },
    { id: "mv02", name: "범죄도시 2", img: "/static/85813_320.jpg" },
    { id: "mv03", name: "탑건 - 매버릭", img: "/static/82120_320.jpg" },
    { id: "mv04", name: "헤어질 결심", img: "/static/85852_320.jpg" },
];

app.get(/\/(list)?/,(req,res)=>{
    res.render("list",{
        movies: movies
    });    
});
app.get("/seat",(req,res)=>{
    let query = req.query;
    let target = movies.find((elm)=> elm.id == query.id);
    res.render("seat",{target})
})
app.post("/reserve",(req,res)=>{

    res.render("reserve",{target,seat})
})


app.listen(8080,()=>{
    console.log("START");
});