/*
    Variable (변수)
        데이터 저장소
    만들고 데이터 저장시키고 빼서 쓰는 용도
    var : javascript 초창기부터 사용되던 키워드
    let, const : ES5 ~ ES6
*/
//var let은 재설정 가능
var a;
let b = 3.141592;
const c = 3.141592; //상수 값을 설정해놔야 쓸 수 있음, 재설정 불가능

console.log(a);
console.log(a == undefined);

a = 3.141592;
console.log(a);
console.log(3 * 3 * a);
a = 9.8;
console.log(a);

