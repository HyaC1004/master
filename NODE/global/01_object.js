/*
*/  
// console.log(globalThis); // node에서 기본적으로 생성되는 객체
// console.log(global);
console.log(global === globalThis);
// global 객체가 가진 요소들은 global을 생략할수 있음
global.console.log("global object");
global.setTimeout(()=>{
    console.log("비동기 작업")
},1000)

// global이 가진 변수 2개
console.log(__dirname);     // 디렉터리이름
console.log(__filename);    // 파일이름

