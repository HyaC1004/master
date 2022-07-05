// console.log(process);
// console.log(value);
if(process.argv[2] !== "1q2w3e4r") {
    process.exit(-1);
}
console.log(process.argv);  // 프로그램 실행하면서 받은 인자값이 있다면 argv로 들어옴
    // [0], [1] 은 실행파일위치 실행파일명이 되는거고, [2]부터가 실행하면서 전달받은 인자들
console.log(process.env.OS);   // 환경변수

console.log(process.memoryUsage());     // 전체 메모리 상태
for(let cnt=0;cnt<=10;cnt++) {
    new Array(10000);
    console.log(process.memoryUsage.rss()); // 실제 사용량    
}
if(Math.random()>0.5) {
    process.exit(0);    // 프로그램 종료 (엑시트 코드값: 0 정상종료)
}

