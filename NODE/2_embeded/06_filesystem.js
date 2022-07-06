/*
    파일을 다룰때 자주 쓰는 기능 파일에 텍스트 쓰기 (Write, Output)
    파일에 적힌 텍스트 읽어오기 (Read, Input)
    readFile - Input
    writeFile - Output / appendFile
*/
const fs = require("fs");
const path = require("path");
let target = "log.txt";
let targetPath = path.join(__dirname,"document",target);

let buffer = Buffer.from("파일에 출력하기 버전2");
console.log("buffer",buffer);

fs.promises.writeFile(targetPath, buffer)    // 버퍼를 넣는게 맞는데 string을 넣어도 알아서 버퍼로 출력댐
    .then(data=>{   // resolve의 결과물이 없어서 매개변수를 작성하지 않아도 됨
        console.log("writeFile success",data);
    })
    .catch(err=>{   // 접근할수 없는 경로 혹은 권한
        console.log(err.message);
    });



