/*
    path모듈은 파일시스템의 경로관련 기능들이 들어있는 모듈
*/
//console.log(require("path"));   // 이것 자체가 객체다.
const path = require("path");

console.log(__filename);

console.log(path.sep);  // 운영체제 경로 구분자
console.log(path.basename(__filename));     // 파일명
console.log(path.dirname(__filename));      // 디렉토리명
console.log(path.extname(__filename));      // 확장자명

const parsed = path.parse(__filename);
console.log(parsed);

const foramted = path.format(parsed);
console.log(foramted);

//========================================
// join
let result = path.join(".","node","global","01_object.js");
console.log(result);
console.log("\\node"+path.sep+"global\\01_object.js");