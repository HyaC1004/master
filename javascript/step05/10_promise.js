/*    
    자바스크립트는 비동기 처리를 위해 콜백함수를 활용하는 패턴으로 프로그래밍 언어를 설계했음.
    콜백패턴의 문제는 비동기 작업의 결과를 활용하며 작업을 하게 될때 콜백헬로 인해 가독성도 떨어지고
    콜백에서 발생하는 에러를 처리하기 곤란함.

    그래서 ES6에서 Promise 객체를 제공함.
*/
// 1. Promise 객체에 작업을 넣어주면 이 작없은 바로 실행은 시킴.
// 2. Promise 객체는 상태가 있는데 Pending ==> (Fullfilled / Reject)
const p = new Promise(function(resolve, reject){
    // Todo =======================
    console.log("execute");
    
    // ============================
    resolve();  // 작업이 끝나고 대기 상태에 있다가 then을 쓰면 풀리면서 작동
    //reject(); //
});
console.log(p);
// ==================================
p.then(function(){
    console.log("then");
});
p.catch(function(e){
    console.log("catch",e.message);
});