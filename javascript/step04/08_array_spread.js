/*
    array spread : 전개 연산자, 배열을 풀어버린다.
*/
/* 
    function 정의하면서 매개변수 부분에 ...처리한거는 Rest Parameter 라는 것이고
    매개변수로 전달받을 데이터들을 배열로 확보하는 연산자이다.
*/
let arr = [1, 32, 4, 5];

console.log(...arr);  // --> 1,32,4,5 배열이 풀림
let brr = [...arr, 1, 3];
console.log(brr);
// let a = ...arr; => 안댐
function test(a,b,c) {
    console.log(`a= ${a}, b= ${b}, c= ${c}`);
}
test(arr);
test(...arr);
