/*
    function을 정의하는 또 다른 방법
    4. new Function
    마지막부분은 return값 앞부분은 매개변수
*/

let sum = new Function("a","b","c","return a+b+c");

console.log(sum(11,21,31));

let abs = new Function("target", "return target>0 ? target : -target");
console.log(abs(32));
console.log(abs(-12));