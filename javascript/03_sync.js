/*
    비동기 처리 방식으로 작동하는 함수들이 존재한다.
    setTimeout, setInterval 혹은 html의 이벤트 핸들 등이 이에 속한다.
    (HTTP요청 처리, ajax)
    비동기 처리가 가능한 이유는 테스크큐와 이벤트루프가 있어서이다.
    (+백그라운드)
    이벤트루프: 콜스택이 비어있는걸 확인하면서 테스크큐에서 작업을 빼서 콜스택에 넘겨준다.
    테스크큐: 해야될 작업들이 차례대로 들어있는 저장소
    백그라운드: setTimeout 이벤트핸들 같이 비동기 방식의 함수가 등록된 곳 
            테스크큐에 작업을 등록시키는 
*/
function sync() {
    for (let i=0;i<100;i++){
        console.log("....");
    }
}
setTimeout(function(){
    console.log("AAAA");
},0)
sync();
console.log("==============");