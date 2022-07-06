const http = require("http");
const url = require("url");
/* 
    사용자가 요청한 URL에 따라 다른 HTML 응답을 보내게 설계
    url이 /, /index 인 경우에는 환영합니다.
    /learn이면.. ul태그로 아무거나
    그 외엔 없는 서비스다.
*/
const server = http.createServer((req,res)=>{
    console.log(req.url);
    let pathname = url.parse(req.url).pathname;
    res.setHeader("content-type","text/html;charset=utf-8");
    res.write(`<head><style>li{font-size:2rem;}body{background-color:black;color:white;}</style></head>`)
    if(pathname=="/" || pathname=="/index") {
        res.write(`<h1>환영합니다.</h1>`);
    } else if(pathname=="/learn") {
        res.write(`
            <ul>                
                <li>하양</li>
                <li>하양</li>
                <li>하양</li>
                <li>하양</li>
            </ul>
        `);
    } else {
        res.write(`404 PAGE NOT FOUND<br/> 페이지를 찾을 수 없습니다.`);
    }

    res.end();

}).listen(8080,()=>{
    console.log("[SERVER] START");
});