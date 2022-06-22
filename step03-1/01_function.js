/*
    효율적인 프로그래밍을 하기 위해서는
    함수라는 것과 객체라는 것에 대해 알아야 한다.
    1. 함수 = function(기능)?                          
        목적에 맞는 작업을 수행할 수 있게 구현시켜둔 것.
    2. 함수를 만드는 방법은 크게 4가지 방식이 있음
*/
// 1. 선언방식 (function declration)
function display() {
    console.log("function display - ")
}
// 사용법
display();
console.log(typeof display);
// 2. 표현식 방식(function expression)
let fn = function () {
    console.log("function made by expression");
}
fn();
console.log(typeof fn);
let test = fn; // 함수를 다른 변수로 옮길수도 있다.

