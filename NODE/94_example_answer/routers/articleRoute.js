const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const articles = require("../datas/articles");

const router = express.Router();

router.use((req, resp, next) => {
    if (!req.session.auth) {
        return resp.redirect("/account/signin");
    }
    next();
});

router.get("/home", async (req, resp) => {
    let items = await articles.getAll();
    items = items ?? [];
    resp.render("article/home", { items });
    
});


const upload = multer({ 
    storage : multer.diskStorage({
        destination : (req, file, callback) =>{
            const base = new Date().toISOString().slice(0, 10);
            const uploadPath = path.join(__dirname, "..", "static", "article", base);
            if(!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, {recursive :true});
            }   
            req.uploadbaseURL = "/article/"+base;
            callback(null, uploadPath);
        }
    })
});

router.post("/upload", upload.array("attach"), async (req, resp) => {
    const attaches = [];
    if(req.files && req.files[0]) {
        req.files.forEach((elm)=>{
            attaches.push(req.uploadbaseURL+"/"+elm.filename);
        });
    }
    const item = {
        writerId: req.session.user.id,
        writerName : req.session.user.name,
        writerImage : req.session.user.image,
        type : req.body.type ?? "public",
        message : req.body.message,
        createdAt : new Date(),
        attaches : attaches,      // 이건 수정 필요
        commments : []
    };
    let result = await articles.add(item);
    console.log(result);
    resp.redirect("/article/home");
});

router.get("/view", async ( req, resp)=>{
    let found = await articles.getById(req.query.articleId);
    // resp.render( ????? , found);
})





module.exports = router;