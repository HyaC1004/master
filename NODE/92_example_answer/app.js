
// 
const path = require("path");
const express = require("express");
const session = require("express-session");
const fileStore = require('session-file-store')(session);
const morgan = require("morgan");

// app configuration
const app = express();
const accountRouter = require("./router/account");

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "view") );
app.use(morgan("tiny"));      // combin

app.use(session({ 
    secret : "mErN",
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : 1000*60*20
    }
}));
// app.use("/", indexRouter);
app.use("/game", require("./router/game") );
app.use("/account", accountRouter);

app.get("/", (req, resp)=>{
// console.log(req.session);
//     req.session.init = Date.now();
    resp.send("Zzzz..");
})






app.listen(8080, ()=>{
    console.log("[Express] START");
});