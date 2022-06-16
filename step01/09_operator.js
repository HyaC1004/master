/*
    비교연산을 진행하면 데이터가 어떤 상태가 맞는지를 확인할 수 있다.
    상태체크 &&(and), ||(or)
    &&(and) 모든 조건 만족 시 true
    ||(or) 한 조건이라도 만족 시 true
*/
/*
let value = 31;
console.log(value >= 10);
// 정수인지 확인?
console.log(value%1 === 0);
// 10 이상의 정수가 맞는지 체크
console.log ((value%1 === 0) && (value >= 10));

let input = "y";
// input이 가진 텍스트가  y인지체크
console.log(input === "y");
console.log(input === "Y");
console.log(input === "y" || input === "Y");
// console.log(input ==='Y' || 'y' || 'yes'); //이렇게는 안씀
*/
const r = require("readline-sync");

//let i = r.question("input number(1~10)> ");
//console.log(i<=10 && i>=1);

let age = r.question("your age? ");
let from = r.question("Where are u from? (ex:kor, jpn, usa, etc.) ");
// 19세이상이며 한국 출신인지(kor, KOR)
// &&이 연산이 더빠르다 ||보다
console.log(age >= 19 && (from === "kor" || from === "KOR"));


