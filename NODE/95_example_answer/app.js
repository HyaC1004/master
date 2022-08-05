const uri = "mongodb+srv://edupoll:1q2w3e4r@cluster0.lc7bymt.mongodb.net/?retryWrites=true&w=majority";
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const session = require("express-session");
const session_secret = "P@ssw0rd";

const expressWs = require("express-ws");

const app = express();
const wsInstance = expressWs(app);

mongoose.connect(uri, {dbName : "example"});
  
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));
app.use(session({ secret: session_secret, resave: true, saveUninitialized: true }));

app.use("/account", require("./routers/accountRoute"));
app.use("/chats", require("./routers/chatsRoute.js"));


app.use((err, req, resp, next) => {
    resp.status(500).send(err.message);
});

app.listen(8080, () => {
    console.log("[EXPRESS] START");
});



