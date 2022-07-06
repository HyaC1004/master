/*
    파일에 읽고 쓰기가 아니라
    시스템 자체를 제어하는것도 filesystem 모듈에 구현되어있다.

    디렉토리 생성 (mkdir)
    파일 삭제 (unlink) / 디렉토리 삭제 (rmdir)
    이름 변경 (rename)  
    
    rmdir로 비어있지 않은 디렉토리 삭제하고 싶다면 옵션설정 해주면됨
    rm = 파일 및 디렉토리 삭제
    exists = 파일 존재여부 확인
*/
const fs = require("fs");
const path = require("path");


// rmdir은 파일삭제 불가
// try{
//     fs.rmdirSync(path.join(__dirname,"music"));
//     console.log("success");
// } catch(e) {    // 비어있는 디렉토리만 삭제가능
//     console.log(e.message);
// }



/* 
// 파일과 디렉토리 모두 이름변경 가능 및 다른 디렉토리에 복사도 가능
fs.promises.rename(path.join(__dirname,"document","hxd.zip"),
                    path.join(__dirname,"music","hxd.zip"))
    .then()
    .catch(err=>{
        console.log(err.message);
    });
 */

/* 
fs.promises.unlink(path.join(__dirname,"document","message2.txt"))
    .then(rst=>{
        console.log(rst);
    })
    .catch(err=>{
        console.log(err.message);
    })
 */
