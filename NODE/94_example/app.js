// ===================================================
const express = require("express");
const path = require("path");
const session = require("express-session");
const session_secret = "P@ssw0rd";
const morgan = require("morgan");
const fileStore = require('session-file-store')(session);
const multer = require("multer");
const fs = require("fs");
//===================================================

const app = express();
const accountRouter = require("./router/account");
const userRouter =  require("./router/user");
const articleRouter = require("./router/article");
const apiRouter = require("./router/api");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("common"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(session({ 
    secret: session_secret, 
    resave: true, 
    saveUninitialized: true
}));

app.use("/account",accountRouter);
app.use("/user",userRouter);
app.use("/article",articleRouter);
app.use("/api",apiRouter);

app.all("/",(req,res)=>{
    res.redirect("/article/home");
});


app.listen(8080,()=>{
    console.log("[Express] START");
});