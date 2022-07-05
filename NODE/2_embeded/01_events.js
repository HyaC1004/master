//console.log(require("events"));
const EventEmitter = require("events"); // class 혹은 생성자함수
console.time("run ");
process.on("exit",()=>{
    console.timeEnd("run ");
});
// node 특징중에 이벤트 기반이라는 말을 했는데, 
// 노드에서 사용되는 객체들은 EventEmitter라는 것을 상속받아(혹은 Prototype) 설계된 것과 연관이 있다.
const emitter = new EventEmitter();
emitter.on("evt",()=>{
    console.log("Evt 발생");
});

emitter.emit("evt");
/*
    같은 이벤트로 여러개 등록해도 된다는 성질이 있음. DOM제어에 사용했던 addListener랑 같음
    addListener도 있음. on 이랑 같이 작동함

    on 말고 once라는게 있는데, 2번째부터 무시
*/
emitter.once("close", (a)=>{
    console.log("close event occur!", a);
});
emitter.emit("close", Date.now());
emitter.emit("close", Date.now());  // 무시


console.log(process instanceof EventEmitter);
