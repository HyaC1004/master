const arr = ["사과", "바나나", "사과", "배", "수박", "수박"];
// 배열이라는 저장용 객체가 가지고 있는 모든 요소(데이터)들을 조회
// 차례대로 번호가 붙는다 (0부터 시작 / 이 번호를 index라고 부름)
// lengt가 있는데 데이터 개수(==> 마지막 데이터의 index는 length-1)
// console.log(arr[40]); // 일반 객체랑 마찬가지로 해당인덱스에 데이터가 없으면 undefined
// 1. length를 이용한 for loop 처리
let find = "사과";
let n = 0;
for (let i = 0; i < arr.length; i++) { // i=0;i<=arr.length-1;i++
    //console.log(i,arr[i]);    
    if (arr[i] === find) {
        n++;
        //console.log(i, find)
    }
}
//console.log(n);
//========================================
let targetIdx = 4;
//targetIdx의 앞쪽으로의 사과의 개수
let cnt = 0;
for (let i = 0; i < targetIdx; i++) {
    if (arr[i] === find) {
        cnt++;
        //console.log(i, find)
    }
}
//=========================================
// 어떤 특정 index가 주어졌을때 그 index의 요소값이 뒤에도 존재하는지?
let idx= 0; // 바뀔수있다.
let yn = false ;
for (let step = idx + 1;step<arr.length ;step++) {    
    if(arr[step]===arr[idx]) {
        yn=true;
        break;
    } 
}
console.log(yn);

