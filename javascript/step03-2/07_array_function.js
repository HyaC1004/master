
const arr = [3,5];
arr.push(4);   // 가능
//arr = [];   //불가능
// function
// unshift: 맨앞에 요소 추가, shift: 맨 앞요소를 추출
arr.unshift(13); // 앞에
console.log(arr);
let v = arr.shift();
console.log(arr);
for (i=1;i<6;i++) {
    let t = arr.shift();
    console.log(arr);
    console.log(v);
}
//====================================================================
// push와 shift를 사용하면 Array를 Queue라는 형태의 구조로 사용할수 잇다.
// Queue라는 구조는  FIFO 선입선출

// concat: 이어붙이기 (배열 합치기): 원본에 변화가 일어나진 않는다.
let one = [3,4,51];
let two = [4,35,6,7,1];
console.log(one.concat(two)); // 새로운 배열이 만들어짐
