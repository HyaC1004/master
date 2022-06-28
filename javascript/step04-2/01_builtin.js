/*
    built-in 객체 (함수) = 표준에 정의된 것만 40몇가지가 됨
    ECMA Script에 정의된 객체로, 어떤 환경에서든
    똑같이 작동하는 표준 객체

    host 객체라는 것도 있는데, ECMA에 정의되어 있지 않은
    특정 환경에서만 작동하는 객체를 의미
*/
// alert("!!"); 이런 함수는 브라우저내에서만 작동함 (node환경에서 작동안함) 이런건 host
console.log("--"); // 이런 함수는 어떤 환경에서도 작동함 이런건 built-in

// 1. Number built-in 객체
// Number 객체를 사용하고자 하면
const num = new Number(100);   // default 0
console.log(num);
const num_2 = Number("12.33");
console.log(num_2); // +효과
console.log(Number(Math.PI));
console.log(Number("text"));
// toFixed(number) 소수점 아래 제한 ===> string
console.log(num.toFixed(2));
console.log(num_2.toFixed(1));
console.log(typeof num, typeof 100);
// num을 Number로 쓰려고 하면 자동으로 Wrap이 된다.
let val = 3;
console.log(val.toFixed(0));
console.log(3 .toFixed(2));
const a1= new Number(3);
const a2= new Number(3);
console.log(a1+a2);
console.log(a1==a2);