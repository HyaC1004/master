const ejs = require("ejs");
const path = require("path");
const express = require("express");
const { application } = require("express");
const { Console } = require("console");

const movies = [
    { id: "mv01", name: "토르 - 러브 앤 썬더", img: "/static/85999_320.jpg", reserve: [] },
    { id: "mv02", name: "범죄도시 2", img: "/static/85813_320.jpg" },
    { id: "mv03", name: "탑건 - 매버릭", img: "/static/82120_320.jpg" },
    { id: "mv04", name: "헤어질 결심", img: "/static/85852_320.jpg" },
];
const app = express();
// template engine setting 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejs"));
// middleware configuration
app.use(express.static(path.join(__dirname, "static")));    // static resource handle
app.use(express.urlencoded({ "extended": true }));  // post body handle

// route 
app.get("/list", (req, resp) => {
    resp.render("list", { movies });
});
app.get("/seat", (req, resp) => {
    let target = movies.find((elm) => elm.id == req.query.id);
    if (!target) {
        return resp.redirect("/list");  // 리다이렉트라고 부름.
    }
    resp.render("seat", { target });
});
app.post("/reserve", (req, resp) => {
    let target = movies.find((elm) => elm.id == req.body.id);
    let seat;
    if (Array.isArray(req.body.seat)) {
        seat = req.body.seat;
    } else {
        seat = [req.body.seat];
    }
    resp.render("reserve", { target, seat });
});

app.listen(8080, ()=>{
    console.log("[Express.js] START");
})