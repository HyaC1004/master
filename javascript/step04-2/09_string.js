/*
    substring, slice : 문자열 추출 (원본 string을 토대로 새로운 string)
    start, end를 설정해서 사용(/ slice는 음수설정이 가능)
*/
let txt = "자바스크립트의 문자열";

let s1 =txt.substring(1,5);
let s2 =txt.slice(1,5);
console.log(s1);
console.log(s2);

console.log(txt.substring(-3));
console.log(txt.slice(-3));  // slice 와 같은 경우 음수 전달하면 뒤에서부터 잘라냄

//======================================
// toUpperCase, toLowerCase (영문)
console.log("ASDfefadsfAEFdsfawe".toUpperCase());
let mode = "y";
mode.toUpperCase() === "Y";

// trim 좌우 공백 제거
let id = "bmoAbby@naver.com ";
console.log(`[${id}]`);
console.log(`[${id.trim()}]`);
// trimStart ..  trimEnd

