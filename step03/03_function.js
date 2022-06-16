/*
    function에 설정된 매개변수에 값이 안들어오면..??
        undefined로 설정된 채로 작동되기 때문에 내부적으로 처리를 해줘야 한다.
*/

function calcSum(n1, n2, n3) {
    n3 = n3 ??0;
    n2 = n2 ??0;
    n1 = n1 ??0;
    let ret = n1+n2+n3;
    return ret;
}
console.log(calcSum(1,3,3));
console.log(calcSum(1,3));
/*
    이게 아니면 매개변수 디폴트 밸류를 설정해두는 것도 가능하다.
*/
let calcMultiple = function(n1=1,n2=1,n3=1) {
    return n1*n2*n3;
} 

console.log(calcMultiple(1,3,3));
console.log(calcMultiple(2,3));