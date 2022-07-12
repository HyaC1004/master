const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"view") );

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"static")));
const movies =[
    {id:"mv01",name:"토르 - 러브 앤 썬더",img:"/thor.png"},
    {id:"mv02",name:"범죄도시2",img:"/roundup.png"},
    {id:"mv03",name:"탑건 - 메버릭",img:"/topgun.png"},
    {id:"mv04",name:"빅샤크4: 바다공룡 대모험",img:"/shark.png"}
]

app.get("/list",(req,res)=>{
    res.render("list",{
        movies: movies
    });    
});
app.get("/seat",(req,res)=>{
    let query = req.query;
    
    res.render("seat",{
        movies: movies,
        movie: movies.findIndex(i=>i.id==query.id)
    });
})
app.post("/reserve",(req,res)=>{
    let movie = req.body.movie;
    let seatNo = req.body.seatNo;
    res.render("reserve",{
        movies: movies,     
        movie: movie,       
        seat: seatNo
    })
})


app.listen(8080,()=>{
    console.log("START");
});