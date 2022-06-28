const http = require("http");
const fs = require("fs");

http.createServer(function(req,resp) {
    console.log("create");
    fs.readFile("./01_basic.html",function(err,data){
        resp.writeHead(200,{"Content-type":"text/html"});
        resp.write(data);
        return resp.end();
    });
    
}).listen(80);


