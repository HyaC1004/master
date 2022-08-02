
/*
    WebSocket 은 서버와 클라이언트간의 양방향 통신을 가능하게 만들기 위해서 만들어진 
    기술이다. 웹소켓이 사용하는 프로토콜은 ws 이고 ,  ws 프토토콜을 처리하기 위해서는 
    선택지가 몇가지가 있는데, 노드기반의 서버라면 ws 모듈 정도가 있고, express 기반의 서버라면
    express-ws 모듈을 이용할 수 있다.
*/

const express = require("express");
const wsEnable = require("express-ws");
const session = require("express-session");
const session_secret = "P@ssw0rd";

const path = require("path");
const app = express();
const wsServer = wsEnable(app); // 

app.use(session({
    secret: session_secret, resave: true, saveUninitialized: true,
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, resp) => {
   
    // resp.render("index");
    resp.render("chat");
})

app.get("/index", (req, resp) => {
    // resp.render("chat");
    resp.render("index");
})

app.ws("/chat", (ws, req) => {
    
       
    ws.on("close", () => {

    });

    ws.on("message", (msg) => {
        let message = JSON.parse(msg);
        switch (message.type) {
            case "join":
            case "exit":
                wsServer.getWss().clients.forEach((one) => {
                    if (one !== ws) {
                        one.send(JSON.stringify(message));
                    }
                });
                break;
            case "chat":
                wsServer.getWss().clients.forEach((one) => {
                    one.send(msg);
                });
                break;
        }
    });

});


app.ws("/server", (ws, req) => {
    ws.on("message", (msg) => {
        console.log(msg);
        ws.send("SERVER SENT");
    });
});


app.listen(8080, () => {
    console.log("SERVER START");
})




