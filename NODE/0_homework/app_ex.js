const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

const sessions= new Map();
const namePool = {};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"view") );

app.use(express.urlencoded({ "extended": true }));
app.use(express.static(path.join(__dirname,"static")));
const movies =[
    {id:"mv01",name:"토르 - 러브 앤 썬더",img:"/thor.png",reserve:[]},
    {id:"mv02",name:"범죄도시2",img:"/roundup.png",reserve:[]},
    {id:"mv03",name:"탑건 - 메버릭",img:"/topgun.png",reserve:[]},
    {id:"mv04",name:"빅샤크4: 바다공룡 대모험",img:"/shark.png",reserve:[]}
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
    
});
app.post("/reserve",(req,res)=>{    
    let movie = req.body.movie;
    let seatNo = req.body.seatNo;     
    if(Array.isArray(req.body.seatNo)){
        seatNo = req.body.seatNo;
    }else{
        seatNo = [req.body.seatNo];
    }       
    //movies[movie].reserve.push(seatNo);
    //let test = concat(movies[movie].reserve);
    console.log(test);
    res.render("reserve",{
        movies: movies,     
        movie: movie,       
        seat: seatNo
    });       
});
app.listen(8080,()=>{
    console.log("START");
});
