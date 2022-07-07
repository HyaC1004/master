/*
    응답 전송시 res에 직접 writing을 하고 있지만,
    이 상태로는 복잡한 HTML을 전송하기 힘듬
    그래서 pipe 혹은 readFile (fs module)를 사용해서 처리해보자.
*/
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");
//=====================================================
http.createServer((req,res)=>{
    const pathname = url.parse(req.url).pathname;    
    try{
        if(pathname.startsWith("/images")) {
            fs.createReadStream(path.join(__dirname,"html",pathname)).pipe(res);        
        }
        if(pathname.startsWith("/static")) {
            fs.createReadStream(path.join(__dirname,"game",pathname)).pipe(res);        
        }
    } catch(e) {
        console.log(e.message);
    }

    res.setHeader("content-type", "text/html;charset=utf-8");
    if(pathname === "/" || pathname === "/index") {
        fs.promises.readFile(path.join(__dirname,"html","index.html"))
            .then((data)=>{
                res.end(data);
            })
            .catch((err)=>{
                res.end(err.message);                     
            })
    } else if(pathname==="/game") {
        fs.createReadStream(path.join(__dirname,"game","game.html")).pipe(res);
    }
}).listen(8080,()=>{
    console.log("START");
});