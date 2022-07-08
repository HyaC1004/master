const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");
const querystring = require('querystring');

const movies =[
    {id:"mv01",name:"토르 - 러브 앤 썬더",img:"/static/thor.png"},
    {id:"mv02",name:"범죄도시2",img:"/static/roundup.png"},
    {id:"mv03",name:"탑건 - 메버릭",img:"/static/topgun.png"},
    {id:"mv04",name:"빅샤크4: 바다공룡 대모험",img:"/static/shark.png"}
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
    if(pathname==="/list") {
        let html = await ejs.renderFile(path.join(__dirname,"view","list.ejs"));
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        return res.end(html);
    }else if(pathname==="/seat") {
        let html = await ejs.renderFile(path.join(__dirname,"view","seat.ejs"));
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        return res.end(html);
    }else if(pathname==="/reserve") {
        let html = await ejs.renderFile(path.join(__dirname,"view","reserve.ejs"));
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        return res.end(html);
    }
    res.end("NOT FOUND");
}).listen(8080,()=>{
    console.log("START");
})