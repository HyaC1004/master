/*
    Buffer: In Out에서 처리되는 바이트(파일데이터)를 관리하기 위한 전용 배열(숫자)
*/
// let buf = new Buffer(100);
let buf = Buffer.alloc(20);
buf.fill(1);
buf.forEach((val,idx)=> {
    console.log(`[${idx}] = ${val}`);
})