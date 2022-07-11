const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");
const querystring = require('querystring');
const fs = require("fs");

const movies =[
    {id:"mv01",name:"토르 - 러브 앤 썬더",img:"static/thor.png"},
    {id:"mv02",name:"범죄도시2",img:"static/roundup.png"},
    {id:"mv03",name:"탑건 - 메버릭",img:"static/topgun.png"},
    {id:"mv04",name:"빅샤크4: 바다공룡 대모험",img:"static/shark.png"}
]
/*
    list.ejs 랜더링 할때 이 배열을 넘겨주고 난후
    for(let i=0; i<movies.length;i++){
        <label><%= movies[i].name %></label>
        <a href="/seat?code=<%= movies[i].id %>">
            <img src="<%=movies[i].img%>" />
        </a>
    }
*/
http.createServer(async(req,res)=>{
    const pathname = url.parse(req.url,true).pathname;  
    console.log(req.url);  
    if(pathname.startsWith("/static")){
        return fs.createReadStream(path.join(__dirname,'/',pathname)).pipe(res);
    }
    if(pathname==="/list" || pathname==="/") {
        console.log(req.url);        
        let html = await ejs.renderFile(path.join(__dirname,"view","list.ejs"),{
            movies: movies
        });        
        
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end(html);
    }else if(pathname==="/seat") { // GET 요청        
        let query = url.parse(req.url, true).query;       
        if(!query.code ) {
            res.writeHead(302, {"Location": "/list"});
            return res.end();
        }
        //console.log(movies.findIndex(i=>i.id==query.code));
        let html = await ejs.renderFile(path.join(__dirname,"view","seat.ejs"),{
            movies: movies,
            movie: movies.findIndex(i=>i.id==query.code)
        });
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end(html);
    }else if(pathname==="/reserve") {
        let recv;
        req.on("data",(data)=>{                
            recv=data;              
        });    
        req.on("end",()=>{
            const params = new URLSearchParams(recv.toString());
            let movie = params.get("movie");
            let seatNo = params.getAll("seatNo")                       
            
            ejs.renderFile(path.join(__dirname,"view","reserve.ejs"),{
                movies: movies,     
                movie: movie,       
                seat: seatNo
            }).then(data =>{
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                //console.log(data);
                res.end(data);
            });
        });
    }else{
        ejs.renderFile(path.join(__dirname,"view","404.ejs"),{
        }).then(data =>{
            res.writeHead(404,{
                "content-type" : "text/html;charset=utf-8"
            });          
            res.end(data);
        }); 
    }
    
}).listen(8080,()=>{
    console.log("START");
})