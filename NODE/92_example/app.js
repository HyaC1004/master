const express = require("express");
const path = require("path");

const app = express();
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

const gameRouter = require("./router/game");
const accountRouter = require("./router/account");
const session = require("express-session");

app.use(session({
    secret: "game"
}));

app.use("/game",gameRouter);
app.use("/account",accountRouter);

app.listen(8080,()=>{
    console.log("START");
})