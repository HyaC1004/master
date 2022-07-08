const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");
const querystring = require('querystring');

/*
    제공하는 URL로 데이터를 사용자가 쉽게 보내게 하는 HTML요소들에 대해
*/
http.createServer(async(req,res)=>{
    const pathname = url.parse(req.url,true).pathname;
    if(pathname==="/sample/a") {
        let html = await ejs.renderFile(path.join(__dirname,"view","a.ejs"));
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        return res.end(html);
    }else if(pathname==="/sample/b") {
        let html = await ejs.renderFile(path.join(__dirname,"view","b.ejs"));
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        return res.end(html);
    }
    res.end("NOT FOUND");
}).listen(8080,()=>{
    console.log("START");
});