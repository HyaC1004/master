/* 
    node의 console 객체는 다양한 기능을 제공함. (브라우저의 콘솔과는 다름)
    time, timeEnd 타이머관련기능
*/
 for(let i=0;i<10;i++){
    console.time(`process${i}`);
    setTimeout(()=>{
        //console.timeEnd(`process${i}`);
        if(i===9) {
          //  console.clear();
        }
    },1000);
} 
/*
    assert, 조건 결과에 따라 출력, false일때 출력
*/
let val = 3;
console.assert(val!==3,"invalid value");
/*
    dir, 상세보기
*/
let obj = {name:"감혜빈",age:27,flag:false, hobbies: ["공부하기","운동하기"]};
console.dir(obj,{colors:true, depth:0});
/* trace(); 사용되게 된 과정을 추적해서 출력함 */
function sum(a,b) {
    //console.trace("function sum");
    return a+b;
}
sum(1,2);
/* 
    의미있는 출력
    console.log, console.info, console.warn, console.error 
*/
// 배열을 하나 만들어서 console.table()
let arr = [1,2,3,4,5,6];
console.table(arr);