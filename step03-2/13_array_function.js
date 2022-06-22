/*
    reduce: 콜백함수 호출을 통해 하나의 결과값으로 만들어진다.
*/
const data = [1,3,54,9,2,52,2];
let t = data.reduce(function(prev, next) { // 리턴되는 밸류를 prev에 집어넣음
    console.log(`prev ${prev}, next ${next}`);
    //return prev;
    return next;
},-1);
console.log(t);

let m = data.reduce((prev,next) => prev>next ? prev:next, 0);
console.log(m); // 맥시멈 데이터 값 찾기

// 합
let sum = data.reduce(function(prev, next) {
    return prev+next;
},0); 
console.log(sum);

//평균
let avg = data.reduce(function(prev, next, idx, {length}) {
    if(idx < length-1) {
        return prev+next;
    } else {
        return (prev+next)/length;
    }
},0); 
console.log(avg);