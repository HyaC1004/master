/*
    require("fs");
    파일시스템을 제어하기 위한 모듈
*/
const fs = require("fs");
const path = require("path");
/*
    파일시스템의 핵심 기능은 파일을 읽어들이고 파일로 출려하는것
    기본적으로 3가지 형태로 처리할수 있게 되어있다.
    1. callback
    2. sync    (취지에 어긋남)
    3. promise    
*/

fs.readFile("NODE/package.json",function(err,data){
    // 읽기에 실패하면 err에 데이터가 들어가고, 성공하면 data가 들어가고
    console.log(data instanceof Buffer, data);
});

let data = fs.readFileSync("NODE/package.json");
console.log(data instanceof Buffer, data);

fs.promises.readFile("NODE/package.json")
    .then((data)=>{
        console.log(data instanceof Buffer, data);
    });
//================================================
fs.mkdir(path.join(__dirname,"photo"),function(err){
    console.log("mkdir",err.message);
});

try{
    let result = fs.mkdirSync(path.join(__dirname,"music"));
    console.log(result);
} catch(e) {
    console.log("mkdirSync", e.message);
}

fs.promises.mkdir(path.join(__dirname,"document"))
     .then((data)=>console.log("promises.mkdir ",data))
     .catch((e)=>console.log("promises.mkdir ",e.message));