/*
    string 클래스
        Number와 비슷하고 String data의 Wrapper 객체이다.
*/
let one = "text";
let two = new String("text");

console.log(one, typeof one);
console.log(two, typeof two);

console.log(one.includes("x"));
console.log(two.includes("x"));

//====================================
// 생성자 함수를 일반 function처럼 사용하면.. 해당값을 string으로 만들어준다.
let t = String(true);
console.log(t, typeof t);

//====================================
// String의 static method
// fromCharCode, fromCodePoint 
let str = String.fromCharCode(65);
console.log(str);
let str2 = String.fromCodePoint(65);
console.log(str2);
console.log(String.fromCharCode(54620));
// for (let code=41; code <=120; code++){
//     console.log(code,String.fromCharCode(code));
// }
//48  ~ 57 수치형 문자, 65 ~90(대문자), ...97 ~122{소문자}

// for (let code=44032; code <=45555; code++){
//     console.log(code,String.fromCharCode(code));
// }
//======================================
// Math class String class를 이용해서 대문자  65~90
for (let c = 1; c <= 20; c++) {
    let d = 65 + Math.floor(Math.random() * 26);
    let sd = String.fromCharCode(d);
    console.log(sd);
}
