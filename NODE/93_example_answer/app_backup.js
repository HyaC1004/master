const express = require("express");
const path = require("path");



const mongodb = require("mongodb");
const { response } = require("express");
const uri = "mongodb+srv://edupoll:1q2w3e4r@cluster0.lc7bymt.mongodb.net/?retryWrites=true&w=majority";

// const MongoClient = require("mongodb").MongoClient;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views") );

app.use(express.urlencoded({extended : true}));

app.route("/write")
    .get((req, resp)=>{
        // let criteria = { _id : new mongodb.ObjectId("sdadsadsaa") };
        
        resp.render("write",{});
    })
    .post((req, resp)=>{
        let obj = {
            name : req.body.name,
            password : req.body.password,
            comment : req.body.comment,
            createdAt : new Date()
        };
        const client = new mongodb.MongoClient(uri);
        client.db("study").collection("guestbook").insertOne(obj)
            .then((result)=>{
                if(result.acknowledged) {
                    return resp.redirect("/list");
                }else {
                    resp.render("write",{});
                }
            }).catch(err=>{
                resp.render("write",{});
            });
    });

app.get("/list", async (req, resp)=>{
    const client = new mongodb.MongoClient(uri);
    let array = await client.db("study").collection("guestbook").find().sort().toArray();
    array.sort((one, other)=>{
        return (one.createdAt - other.createdAt);
    });
    array.reverse();

    resp.render("list", {array} );
});

app.listen(8080);









