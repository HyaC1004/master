// ===================================================
const express = require("express");
const path = require("path");
//===================================================

const app = express();
const movieRouter = require("./router/movie");
const apiRouter = require("./router/api");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/movie",movieRouter);
app.use("/api",apiRouter);




app.listen(8080,()=>{
    console.log("[Express] START");
});