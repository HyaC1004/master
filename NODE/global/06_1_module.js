/* 
    module: 독립된 기능을 갖는것(함수, 파일)들의 모임

    node에 글로벌로 설정된 module 이란 객체는 
    모듈(다른 파일에 정의된 function등)을 연결시켜주는 객체
*/
//console.log(module);
console.log(require("./custom/calc"));
const calc = require("./custom/calc");
let val = calc.add(333,222,555);
console.log(val);

const {add, multifly} = require("./custom/calc");
let val2 = multifly(3,4,5,6);
console.log(val2);
