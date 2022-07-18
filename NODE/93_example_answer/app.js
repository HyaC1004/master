// ===================================================
const express = require("express");
const path = require("path");
//===================================================
const guestbook = require("./collections/guestbook");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// app.use("/guestbook", guestbookRouter);

app.route("/write")
    .get((req, resp) => {
        resp.render("write", {});
    })
    .post(async (req, resp) => {
        let obj = {
            name: req.body.name,
            password: req.body.password,
            comment: req.body.comment,
            createdAt: new Date()
        };
        let result = await guestbook.insertOne(obj);
        if (result.insertedId) {
            resp.redirect("/list");
        } else {
            resp.render("write");
        }
    });

app.get("/list", async (req, resp) => {
    let array = await guestbook.findAll();
    resp.render("list", { array });
});

app.get("/delete", (req, resp) =>{
    resp.render("valid", { target : req.query.id });
});

app.post("/delete", async (req, resp) => {
    let t = await guestbook.findById(req.body.target);
    if(t && t.password===req.body.password) {
        let result = await guestbook.deleteById(req.body.target);
        resp.redirect("/list");
    } else {
        resp.redirect("/delete/?id="+req.body.target);
    }
});                                                                                              

app.route("/update").get(async (req, resp) => {
    let obj = await guestbook.findById(req.query.id);
    resp.render("update", {obj } );
}).post(async (req, resp) => {
    let obj = {
        name: req.body.name,
        password: req.body.password,
        comment: req.body.comment,
    };
    let result = await guestbook.updateById(req.body.id, obj);
    console.log(result);
    resp.redirect("/list");
});




app.listen(8080);









