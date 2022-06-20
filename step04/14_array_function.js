/*
    boolean 리턴됨
    some: 콜백의 결과가 하나라도 true라면 true
    every: 콜백의 결과가 전부 true여야 true
*/
const arr = [100, 20, 540, 0];
let r = arr.some((val) => val >= 500);
console.log(r);
let e = arr.every(function (val) {
    return val % 2 === 0 && val > 0;
});
console.log(e);
/*
    find: 콜백에서 최초로 true인 데이터를 리턴 없으면 undefined
    findIndex: 콜백에서 최초로 true인 데이터의 인덱스 값 없으면 -1
*/
let f = arr.find((val) => val>0);
console.log(f);
let i = arr.findIndex((val) => val>100);
console.log(i);

/*
    배열과 같은 이런 객체들은 API를 참조해서 사용하는 것.
    자바스크립트 API는 Mozilla의 MDN API를 많이 사용한다.
*/





