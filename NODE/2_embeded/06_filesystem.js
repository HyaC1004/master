/*
    파일을 다룰때 자주 쓰는 기능 파일에 텍스트 쓰기 (Write, Output)
    파일에 적힌 텍스트 읽어오기 (Read, Input)
    readFile - Input
    writeFile - Output / appendFile
*/
const fs = require("fs");
const path = require("path");
let target = "log.txt";
let targetPath = path.join(__dirname, "document", target);

let buffer = Buffer.from("파일에 출력하기 버전2 ");
console.log("buffer", buffer);

// writeFile - 덮어쓰기,  appendFile - 기존유지하고 추가
// fs.promises.writeFile(targetPath, buffer) // 버퍼를 넣는게 맞는데 string을 넣어도 알아서 버퍼로 출력댐
//     .then(data => { // resolve의 결과물이 없어서 매개변수를 작성하지 않아도 됨
//         console.log("writeFile success", data);
//     })
//     .catch(err => { // 접근할수 없는 경로 혹은 권한
//         console.log(err.message);
//     });
let ws = fs.createWriteStream(targetPath,{flags: 'w+'});  // 쓰기모드를 open
ws.write("안녕하세요", err => {
    if (err) {
        console.log("write failed", err);
    }
});
ws.write("반갑습니다 ");
ws.write("스트림은 한번 생성하면 close를 하기전까지 연결이 되있기 때문에 ");
ws.write("이런식으로 지속적인 writing이 가능");

ws.close();

// ws.write("ㅎㅇ"); // 닫혀서 write가 안댐

