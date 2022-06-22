/*
    function을 정의내리는 다른 방법
    3. arrow function:
    함수를 간결한 문법을 이용하여 정의내리는 형태
*/

const { question } = require("readline-sync");

//중괄호를 안치면 화살표 이후가 바로 return값이 된다.
let max = (a,b) => a>=b ? a: b; 
//let max = (a,b) => {a>=b ? a: b};  undefined로 출력됨 return값을 정해줘야한다.
console.log(max(11,2));
let MAX = function(a, b) {
    return a>=b ? a: b;
};
console.log(MAX(11,2));
let countDivisor = (n) => {
    let cnt = 0;
    for(let v=1; v<=n; v++) {
        cnt += (n%v==0);
    }
    return cnt;
}
console.log(countDivisor(15));

let Max = function (a,b) {
    return a>=b?a:b
}
let plus = (n1,n2) => n1+n2;