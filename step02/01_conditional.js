/*
    이제까지, 기본적인 데이터 종류와 변수를 통한 제어 그리고
    지원하는 연산작업에 대해 알아보았다.

    실제 프로그램은 계산과정에서 
    여러가지 상황을 고려한 처리가 필요하다.

    이걸 가능하게 하는 구문이 if ~ else, switch이다.
    if statement 는 데이터 상태에 따라 다른 처리가 일어날 수 있다.

    var와 let은 영역이 다르게 설정된다.
    let => block scope 선언된 블록 안에서만 사용 가능
    var => global scope (/function scope)
*/
//주차요금 계산표 기본 30분(1000원), 추가 10분 당(400원), 최대요금(10000원)
let time = 50; // 주차한 시간
let endtime = time%10;
let price = 1000;
let left = time - 30;
if( time <= 30) {
    price;
} else if ( endtime === 0) {        
    let extra = (left - (left%10))/ 10 * 400; // 끝자리 0일때    
    price += extra;
} else {
    let extra = (left + 10 - (left%10))/ 10 * 400; // 끝자리 0아닐때
    price += extra;
}
// 최대요금 10000원
price = price >= 10000 ? 10000 : price;
console.log(`주차요금 : ${price}원`);

