/*
    readStream 읽어내는 용도의 스트림
*/
const fs = require("fs");
const path = require("path");
let target = "log.txt";
let targetPath = path.join(__dirname, "document", target);

let rst= Buffer.alloc(10);
let rs = fs.createReadStream(targetPath,{highWaterMark: 16});
// 이벤트기반으로 사용하는 스트림
rs.on("data", (chunk)=>{
    console.log(chunk);
});
/*
    pipe를 통해
    readStream ==> WriteStrim 쪽으로 연결을 시킬수 있다.
*/
let source = fs.createReadStream("NODE\\2_embeded\\document\\hxd.zip");
source.pipe(fs.createWriteStream("NODE\\2_embeded\\document\\hxd_copy.zip"));

source.on("end",function() {
    console.log("streaming done");
});
