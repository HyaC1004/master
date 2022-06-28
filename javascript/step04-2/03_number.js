/*
    Number - static function
        parseInt 정수, parseFloat 실수
        parameter : string, radix(진법)
*/
let r = Number.parseInt(342.922); // 소수점이 있다면 버려진다.
console.log(r, typeof r);
/*
    parseInt, parseFloat은 built-in function으로도 등록되어있다.
*/
console.log(parseInt(56424.22));
console.log(Number.parseInt === parseInt);

console.log(Number.parseInt("10101"));
console.log(Number.parseInt("10101",2));
console.log(Number.parseInt("10101",8));
console.log(Number.parseInt("0f",16));

console.log(Number.parseFloat("25425.15"));
console.log(Number.parseFloat === parseFloat);

// Number . prototype function (만들어진 Number를 통해서 사용)
let x = 3321;
console.log(x.toExponential(1));  // 지수표기법
console.log(x.toPrecision(3));  // 유효자릿수
console.log(x.toFixed(1));  // 소수점 아래 고정

console.log(x.toString(), typeof x.toString());

/*

*/
