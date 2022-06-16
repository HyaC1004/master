/*
num = 3;  // globalThis 의 프로퍼티로 들어간다.
console.log(globalThis);    //전역객체
console.log(globalThis.num);  //3출력
*/

function test(value) {
    this.value = value;
    return this;
}

console.log(test(3) === globalThis);
console.log(globalThis.value); //생성자로 콜을안하면 전역객체로 들어간다.
//console.log(new test(3));


