/*
    setTimeout 매개변수로 받은 콜백함수를 어느 정도의 딜레이 뒤에 작동을 시키는 함수

    비슷하게 만들어보자.
*/
function delayedTask(fn,ms) {
    let calledTime = Date.now();
    while(true) {
        let elapsed = Date.now() - calledTime;
        if(elapsed >= ms) {
            break;
        }
    }
    fn();
}
delayedTask(function(){
    console.log("멈춘줄 알았지1?");
},3000);
console.log("TERMINATED ==== ");

setTimeout(function(){  // 비동기 (함수가 콜한 순서대로 작동을 하지않음)
    console.log("멈춘줄 알았지2?");
},3000);

console.log("TERMINATED ==== ");
/*
    setTimeout이 앞서 구현한 delayedTask와 유사하지만 다른점은 
    setTimeout 이후에 작업을 블로킹하지 않고 바로 실행시킨다는 점.

    setTimeout 같이 실행중인 테스크가 종료가 되지 않은 상태에서 
    다음 태스크가 바로 실행되는 방식을 비동기 방식이라고 부른다.

    동기방식의 장점: 실행순서가 보장됨. 단점: 하나의 작업이 완료될때까지 다 블로킹이 됨
    비동기방식 장점: 블로킹이 발생하지 않고 다음 태스크 진행.  단점: 순서보장이 안됨
*/