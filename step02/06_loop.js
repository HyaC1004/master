/*
    반복처리에 사용되는 구문이 while 외에도 for 구문이 존재한다.
    for는 while과 다르게 반복설정에 필요한 값들이 3개이다.
    for 사용법은 여러 형태가 있기에 기본 형태를 살펴보자.

    ( ) 안의 ;를 기준으로 
    첫번째 칸이 반복을 시작전에 처리할 일
    두번째칸이 언제까지 할껀지 조건을 설정
    마지막칸이 매회 반복이 끝나면서 해야될 일

    이런 특징을 살려서 while loop와는 다른 상황에서 많이 사용한다.
    대표적인 상황이 정해진 횟수만큼의 반복처리에 용이
*/
console.log(2**10);
let result = 1;
for (let c=1; c<=10; c++) {
    result *= 2;
}
console.log(result);


for (let cnt = 1; cnt <= 5; cnt++){
    console.log("to do job.. " + cnt);
}
//console.log(cnt);
/*
let x = 10;
for(console.log("반복시작") ; x > 0 ; console.log("한 회전 끝")){
    console.log("to do...");
    if(Math.random() > 0.5) {
        x *= -2;
    }
}*/