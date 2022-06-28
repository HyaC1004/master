//코드런으로는 실행안댐
const readline = require("readline-sync");

let userName = readline.question("guest name?o_o? ");
console.log(userName + ". hi?");

let adults = parseFloat(readline.question("how many adults -_-+? "));
console.log(adults + " people");

let kids = parseFloat(readline.question("how many kids -_=? "));
console.log(kids + " kko maeng e");

let total = kids + adults;
//let total = kids*1 + adults*1; 수치형 문자열 * 숫자열 => 숫자열
console.log("Guest name is " + userName + ". " + adults + "adults, " + kids + "kids, Total is " + total + "people. Thx :D");

// 1. string => number 변환후 계산
// 2. string 출력을 더 깔끔하게?
    // ``(back tick) : string template 안에 바로 변수 넣을수있음 ${}
//console.log(`Done!! Name: ${userName} (Adults: ${adults}, Kids: ${kids})`);

//성인 14000, 아이 9000 예약금 10%
let totalMoney = 14000 * adults + 9000 * kids;
let bookMoney = totalMoney * 0.1;
console.log(`${userName}님. 총 이용금액은 ${totalMoney}원, 예약금은 ${bookMoney}원 입니다. 지불하실 금액은 ${totalMoney + bookMoney}원 입니다.`)
let yn = readline.keyInYN("confirm? ");
console.log(yn);