/*
    Buffer: 바이트(파일데이터)가 담긴 숫자배열
*/
const fs = require("fs");
const path = require("path");
let target = "hxd.zip";

fs.promises.readFile(path.join(__dirname,"document",target))
    .then((data)=>{
        console.log(target,data.length);
        console.log(data, data.toString("utf8"));
    })
    .catch((err)=>console.log(err.message));
