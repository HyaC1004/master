/*  
    error : 프로그램 가동중에 예기치 않은 작업으로 발생하는 것으로
    이걸 처리하지 않으면 프로그램이 비정상 종료된다.

    try catch 로 비정상 종료를 막아준다.
*/
// let n = 43.32424244;
// n.toFixed(-1);
function invoke() {
    let obj;
    console.log(obj.value);
}
function run() {
    try {
        invoke();       
    } catch (err) { 
        // catch 문은 에러가 발생했을때만 작동을 한다.
        // 콜스택에 있는 함수가 빠져나가기 전에만 해주면 된다.
        console.log("ERR: ", err.message);
    }
}
run();
console.log("Terminate");