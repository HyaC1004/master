/*
    쿠키를 이용해서 사용자별 저장소(세션)를 운용해보자.
*/
const http = require("http");
const uuid = require("uuid");
const url = require("url");
const path = require("path");
const ejs = require("ejs");

const sessions = {};
const namePool = [];
http.createServer(async(req, res) => {
    if(req.url==="/favicon.ico") {
        res.statusCode=404;
        return res.end();
    }
    // console.log(uuid.v4());  // 강력한 unique 한 값이 만들어진다 이걸 가지고 세션키값으로 사용해보자.
    const recvCookie = cooikeParser(req.headers.cookie);
    let currentUserSession;
    if(!recvCookie.sessionId) {
        const uk = uuid.v4();
        sessions[uk] = { };        
        res.setHeader("set-cookie", "sessionId="+uk);        
        currentUserSession = sessions[uk];
    } else {        
        console.log(recvCookie.sessionId,sessions);
        currentUserSession = sessions[recvCookie.sessionId];
    }
    
    
    //=====================================================
    if(req.url==="/game") {
        if(!currentUserSession.playerName) {
            res.writeHead(302,{"location":"/login"});
            return res.end();
        }else{
            let html = await ejs.renderFile(path.join(__dirname,"view","game.ejs"),{currentUserSession});
            return res.end(html)
        }
    } else if(req.url==="/login") {
        let html = await ejs.renderFile(path.join(__dirname,"view","login.ejs"),{msg:""});
        return res.end(html)
    } else if(req.url.startsWith("/session")) {
        let query = url.parse(req.url,true).query;
        // form에서 전달받을때 input name설정을 name으로 한걸 가정
        if(namePool.includes(query.name)){
            let html = await ejs.renderFile(path.join(__dirname,"view","login.ejs"),
                            {msg:"이미 사용중인 이름입니다."});
            return res.end(html)
        }else{
            namePool.push(query.nmae);
            currentUserSession.playerName = query.name;
            res.writeHead(302,{"location":"/game"});
            return res.end();
        }
    }

}).listen(8080, () => {
    console.log("[SERVER] STARTED");
})


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