/*
    일반적으로 함수를 호출하면 자동적으로 차례대로 진행된다.
*/
function subtest(){
    console.log("subtest");
}
function test1(){
    console.log("test1");
}
function test2(){
    subtest();
    console.log("test2");
}
test2();
test1();

// 콜스택은 하나이기 때문에 동시에 여러 테스크(작업)를 진행할 수 없다.
// 만약 테스크가 시간이 오래 걸린다면 다른 태스크는 블로킹(중단)이 걸린다.