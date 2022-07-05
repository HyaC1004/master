/*
    setTimeout 비동기함수
    console에 시작이라고 출력.
    1초 뒤에 1단계 처리 완료
    2초 뒤에 2단계 처리 완료
    5초 뒤에 전체 작업 완료
*/
console.log("시작");
setTimeout(function() {
    console.log("1단계 처리 완료");
    setTimeout(function() {
        console.log("2단계 처리 완료");
        setTimeout(function() {
            console.log("전체 작업 완료");
        },5000);        
    },2000);
},1000);
/*
    비동기함수를 동기화 방식 처럼 사용하기 위해서 코드가 지저분해짐
*/

