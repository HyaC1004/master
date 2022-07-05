/*
    node의 fs모듈을 쓰면 file 읽고 쓰는 작업을 할수 있음
    
    source.txt에 적혀있는 target 파일을 읽어서 내용을 출력.
*/
const fs = require("fs");
console.log("AAAAAAAAAAAA");
fs.readFile("javascript/source.txt","utf-8",function(err,data){   
    let target = data.split(/\s?:\s?/); 
    fs.readFile(target[1],"utf-8",function(err,data){        
        console.log(data ?? err);        
    });
});
console.log("BBBBBBBBBBBB");
/*
    비동기함수의 처리결과를 받아서 이용해야되는 (비동기함수의 동기화)
        상황은 종종 발생한다. 
    콜백함수만을 이용하게 되면 가독성이 안좋고, 에러처리가 힘들다.
*/