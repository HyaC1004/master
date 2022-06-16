/*
    operator: 연산자 (데이터 계산 및 처리에 사용되는 기호)
    number
        +, - : 양수, 음수

let num = 3;
console.log(+num);
console.log(-num);
console.log(-(-num));
let str = "7204800";
console.log(+str); // +붙이면 숫자열됨
console.log(typeof (+str)); 
console.log(+true);
*/

//사칙연산 ( +, -, *, /, %, **)
let win = 97;
let lose = 4;

console.log(`${win}승 ${lose}패 / 승률: ${(win/(win+lose))*100}%`);

console.log(`win + lose = ${win + lose}`);
console.log(`win + lose = ${win} + ${lose}`);
console.log(`win - lose = ${win - lose}`);
console.log(`win * lose = ${win * lose}`);
console.log(`win / lose = ${win / lose}`);
console.log(`win % lose = ${win % lose}`);  //나머지
console.log(`win ** lose = ${win ** lose}`);
console.log(win ** false);