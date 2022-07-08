/*
    이제까지 URL 별로 다른 요청처리를 해보았고,
    요청이 들어올때 같이 전송된 쿼리를 이용한 처리를 해보았다.

    이번에는 요청이 들어올때 어떤 방식(메서드)으로 들어왔냐에 따라
    다른처리를 해보려고 한다.
*/
const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");

http.createServer(async(req,res)=>{
    if(req.url==="/example") {
        let data = await ejs.renderFile(path.join(__dirname,`view${req.url}.ejs`));
        res.end(data);
    } else {
        console.log(req.method);    // 방금 발생한 요청이 어떤 메서드인지 알아낼수 있다.
        // 대표적으로 GET, POST가 있는데
        // GET요청은 요청 바디(Stream X)를 사용하지 않는 요청 방식 
            // GET요청은 서버사이드에서 query를 분석하면 되는데
        // POST요청은 바디를 사용하는 요청 방식
            // POSE 요청은 query를 사용하지 않고 스트림으로 전달을 받기 때문에 그에 적절한 처리를 해줘야한다.
        req.on("data",(chunk)=>{
            console.log("chunk: "+chunk);
        });
    }
    res.end();

}).listen(8080,()=>{
    console.log("START");
});