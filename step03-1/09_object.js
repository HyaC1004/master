/*
    객체는 여러개의 변수를 하나로 묶고자 할때 사용됨.
    변수에는 값뿐만 아니라 function도 저장됨.
*/
const calc = {
    diff: (n1, n2) => n1 > n2 ? n1 - n2 : n2 - n1,
    sum: function (n1, n2) {
        return n1 + n2;
    },
    avg(n1, n2) {
        return (n1 + n2) / 2;
    }    
};
console.log(calc.diff(3,-1));
calc.divide = function(n1, n2) {
    return n1/n2;
};
console.log(calc.divide(2,3));

