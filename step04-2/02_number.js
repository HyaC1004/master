console.log(Number.EPSILON); // number간의 최대오차
console.log(0.1+0.2);
// 실수형 데이터같은 경우는 태생적으로 데이터 처리중에 정밀도 문제가 발생할 수 밖에 없다.
console.log((0.1+0.2)===0.3);   //false
console.log(Math.abs(0.1+0.2 - 0.3)<Number.EPSILON);

// 실제로 처리할 수 있는 최대 및 최소의 크기
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*10);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
//====================================================
// static function
let x=3;
let y=0;
console.log(x/y === Infinity);
console.log(Number.isFinite(x/y));  // 유한수인지 확인

y = "aaa"
console.log(x*y); // Not a Number
console.log(x*y === NaN); // NaN 체크는 ===로 비교가안댐
console.log(Number.isNaN(x*y)); // 이거로 체크해야댐