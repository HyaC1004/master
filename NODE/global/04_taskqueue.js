/* 
*/
setTimeout(()=>{
    console.log("setTimeout");
},0)
setImmediate(()=>{  // 즉시실행
    console.log("setImmediate");
})
process.nextTick(()=>{  // 우선순위 1위 제일 먼저 출력
    console.log("nextTick");
})  // process.nextTick은 마이크로 테스크 큐(테스크큐보다 우선순위 높다)를 이용한다.
