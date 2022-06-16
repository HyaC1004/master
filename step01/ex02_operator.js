const readline = require("readline-sync");

let userName = readline.question("What's your name? ");
let heightCM = parseFloat(readline.question("How tall are you? "));
let heightM = heightCM/100;
//적정 체중 계산 BMI 수치 : 18.5 ~ 23.0
//BMI 계산식 : 몸무게(kg)/키(m)^2
//적정 몸무게 = (18.5 ~ 23.0) * 키(m)^2
let recommendedMinimumWeight = Math.round(18.5 * (heightM ** 2));
let recommendedMaximumWeight = Math.round(23 * (heightM ** 2));
console.log(`${userName}님 적정몸무게는 ${recommendedMinimumWeight}kg ~ ${recommendedMaximumWeight}kg 입니다.`);