/*
    일반적으로 function은 어떤작업을 할 수 있게 설계하고
    재사용을 목적으로 한다.
    그렇지만 다른 목적으로 설계하는 경우가 몇가지 존재한다.
*/
// 1. 즉시실행함수 : 정의와 동시에 즉시 호출하고, 재사용이 안되는 형태
let avg = (n1,n2) => (n1+n2)/2;
/*(function(){
    let val = 30;
    console.log(val**2);
    console.log(avg(23,1));
}());
(function(){
    let val = 30;
    console.log(val**2);
    console.log(avg(23,1));
})(); 괄호안에 함수만들고 실행
*/
!function(n1){
    let val = 30;
    console.log(val**2);
    console.log(avg(23,1));
}(4);