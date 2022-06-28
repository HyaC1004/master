var http = require("http");

http.createServer(function(req, resp){
    resp.setHeader("content-type","text/html;charset=utf-8");
    resp.end("hi :D");
}).listen(80);
