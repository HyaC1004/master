const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(session({
    secret: "game"
    
}));


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

const gameRouter = require("./router/game");
const accountRouter = require("./router/account");

app.use("/game",gameRouter);
app.use("/account",accountRouter);

app.listen(8080,()=>{
    console.log("START");
})