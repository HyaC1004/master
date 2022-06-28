
let a = 3;
if(true) {    
    let a = 4;    // 영역이 달라서 변수 중복선언해도 적용
    var b = 77;   // 전역이라 블록 밖에서도 사용가능
    console.log(a, b);
}
console.log(a, b);