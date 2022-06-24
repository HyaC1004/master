/*
    String 객체는 유사배열답게 배열의 function과 비슷한 것들이 많이 있다.
*/
let txt = "javascript-master";
// 1. indexOf(string,number?) ==> number
console.log(txt.indexOf("z"));
console.log(txt.lastIndexOf("t"));
// 2. includes(string,number?) ==> boolean
console.log(txt.includes("java"));
// 위에 둘다 서칭을 시작할 인덱스 지정이 가능.
// 3. 비슷한 계열로 search가 있다 / 정규표현식으로
console.log(txt.search(/[Mm]aster/));
// startsWith, endsWith
const datas = ["flower.jpg", "flower01.png", "music.jpg"];
datas.forEach(function(str) {
    console.log(str,typeof str);
    console.log(str.startsWith("flower"), str.endsWith("png"));    
});

//  (\ /)
//  (-- )
//  (uu )
