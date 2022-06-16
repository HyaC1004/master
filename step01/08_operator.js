/*
    앞서 살펴본 연산작업과는 다르게 true, false 를 확인해주는 연산자
    ===, == 와 같은 애들이 몇 개 더 있다.
    (true, false 를 확인해서 if 와 같은 분기문에서 사용)
*/
/*
    비교 연산자
    크기 : >, >=, <, <=
    일치(불일치) : ==, ===, !=, !==
*/
// number의 크기 비교는 예상과 크게 다르지 않다.
let x = 1000;
let y = 700;
console.log(x>=y);
console.log(typeof (x>=y));
console.log(x!=y);
// boolean 크기?
console.log(true > false);
console.log(true < false);
// text 크기 : 문자열 크기 비교는 핸드폰 연락처 목록 ex)가나다순
console.log("가나다" < "강");
console.log("ABC" < "abc");
console.log("123" < "abc");
console.log("ㄱ" < "abc");

console.log("A".charCodeAt());
console.log("1".charCodeAt());
console.log("가".charCodeAt());
console.log("갂".charCodeAt());