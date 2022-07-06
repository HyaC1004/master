const http = require("http");
const url = require("url");
/*
    URL 설계하는 방법 - Legacy    
*/
!function(){
    let data1 = "https://comic.naver.com/bestChallenge/detail?titleId=780739&no=23";
    let data2 = "https://comic.naver.com/bestChallenge/detail?titleId=701701&no=1262"
    console.table(url.parse(data1));
    console.table(url.parse(data2));
};

const server = http.createServer((req,res)=>{
    //createServer 하면서 설정하는 콜백은 on "request"로 등록됨
    /* 
        URL: 서비스의 주소  
        METHOD: 서비스를 받고자하는 목적 -> 웹용 서버 구축할때 GET, POST 방식만 이용        
    */
    console.log(req.url);
    // 사용자가 서버쪽에 요청한 path와 쿼리를 분리    
    let path = url.parse(req.url).pathname;
    let query = url.parse(req.url).query;
    console.log("path: ",path,"query: ",query);
    

    console.log("[SERVER] REQUEST OCCURED")  ;  
    res.setHeader("content-type","text/html;charset=utf-8");

    res.write(`
        <html>
            <head>
                <style>
                    body{background-color:black;color:white;}
                </style>
            </head>

            <body>
                <h1>응답처리결과</h1>
                <p>
                    요청한 path는 <b>${path}</b> 입니다.
                </p>
                <p>
                    요청한 query는 <b>${query}</b> 입니다.
                </p>
            </body>
        </html>
    `);

    // res.write("<h2>안녕하세요</h2>");
    // res.write(`path: ${path}, query: ${query}`);

    res.end();

}).listen(8080,()=>{    
    console.log("[SERVER] START");
});



/* const server = http.createServer();
server.on("request",(req,res)=>{

}).listen(8080); */