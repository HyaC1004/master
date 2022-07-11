/*
    쿠키를 이용해서 사용자별 저장소(세션)를 운용해보자.
*/
const http = require("http");
const uuid = require("uuid");
// const cooikeParser = require("");

function cooikeParser(str) {
    const cookies = {};
    if (str) {
        const cookieArray = str.split(/;\s+/);
        cookieArray.forEach(elm => {
            const [name, value] = elm.trim().split("=");
            cookies[name] = value;
        });
    }
    return cookies;
}

const sessions = {};
http.createServer((req, res) => {
    if(req.url==="/favicon.ico") {
        res.statusCode=404;
        return res.end();
    }
    // console.log(uuid.v4());  // 강력한 unique 한 값이 만들어진다 이걸 가지고 세션키값으로 사용해보자.
    const recvCookie = cooikeParser(req.headers.cookie);
    if(!recvCookie.sessionId) {
        console.log("세션아이디가 없는 사용자 들어옴..")
        const uk = uuid.v4();
        sessions[uk] = { };
        res.setHeader("set-cookie", "sessionId="+uk);        
        console.log("이 사용자에 부여된 저장소 ID 값 : " + uk);
    } else {
        console.log("이미 부여받은 ID가 있는 사용자 들어옴 ")
        console.log("이 사용자 쓰던 저장소 ID 값 : " + recvCookie.sessionId);
        let usedSession = sessions[recvCookie.sessionId];
    }
    // res.writeHead 를 이용해서 text/html 이라고 설정해서 heading tag 보내보자.
    res.writeHead(200, {
        "content-type": "text/html"
    });
    res.end("<h2>????</h2>");

}).listen(8080, () => {
    console.log("[SERVER] STARTED");
})

