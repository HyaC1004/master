/*
    서버 프로그램 - 네트워크를 이용해서 원격지에 있는 사용자들을 대상으로 작동하는 프로그램
    서버프로그램을 사용하기 위해서 사용자들에게 클라이언트 프로그램을 제공해야되는 경우가 있다.

    http를 이용한 웹 서버를 만들때에는 별도의 클라이언트 프로그램을 개발할 필요가 없다.
        (http: hyper text transfer protocol)

    HTTP는 HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜입니다. 
    HTTP는 웹에서 이루어지는 모든 데이터 교환의 기초이며, 클라이언트-서버 프로토콜이기도 합니다.
    클라이언트-서버 프로토콜이란 수신자 측에 의해 요청이 초기화되는 프로토콜을 의미합니다.
*/

const http = require("http");   //
// console.log(http);
const server = http.createServer();

// 포트.. ==> 0 ~ 65535 (1024아래쪽은 안쓰는게 좋고 ~ 50000이상도 x)
server.listen(8080,()=>{
    console.time("run ");
    console.log("[SERVER START]");
});    

let rst = server.on("request",(req,res)=>{
    console.log("[SERVER] REQUEST EVT!");
    console.count("[SERVER] REQUEST")
}); //.on();    // 체이닝 가능

console.log(rst === server);

server.on("close",()=>{
    console.log("[SERER] TERMINATED");
    console.time("runs");
});
// 이벤트를 처리하기 위해 on function을 쓰면 다시 server (this)가 리턴이 되서
// 이벤트 등록을 chaining할 수 있다.


