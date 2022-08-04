const express = require("express");
const expressWs = require("express-ws");
const path = require("path");
const app = express();
const session = require("express-session");
const session_secret = "P@ssw0rd";

expressWs(app); // express 웹 서버에 웹소켓 기능이 추가

app.use(session({
    secret: session_secret, resave: true, saveUninitialized: true,
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/main", (req, resp) => {    
    resp.render("main");
});
app.get("/sub", (req, resp) => {    
    resp.render("sub");
});


app.listen(8080, () => {
    console.log("SERVER START");
});

// 클라에서 new WebSocket 하면서 연결을 시도할때 그 때 작동한다.

const mainWs = new Set();
app.ws("/ss/main",(ws,req)=>{
    console.log("at /ss/main | user connected");
    ws.send("WELCOME..");
    mainWs.add(ws);
});

const subWs = new Set();
app.ws("/ss/sub",(ws,req)=>{
    console.log("at /ss/sub | user connected");
    ws.send("WELCOME.. by sub");
    subWs.add(ws);
});
//=================================================


app.get("/note/read", (req,resp) => {
    resp.sendStatus(404);

    subWs.forEach((ws) => {
        ws.send("MESSAGE????");
    });
});

