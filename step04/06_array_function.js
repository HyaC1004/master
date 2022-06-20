// #static method 
// Array.isArray ==> true
console.log(Array.isArray( { id: 3, name:"최현"}));
console.log(Array.isArray([]));
console.log(3 instanceof Array);
console.log([] instanceof Array);

// # method
// indexOf : 특정요소의 위치를 찾아주는 : 첫번째로 검색된 요소의 인덱스 반환 없으면 (-1 반환)
const arr = [1,32,4,51,3,4,1];
console.log(arr.indexOf(1));
console.log(arr.lastIndexOf(4)); // 거꾸로찾기
// includes : 특정요소를 가지고 있는지 확인 (true, false)/ ES7
console.log(arr.includes(32));
// ==============================================
// push: 맨 마지막에 데이터 추가, pop: 맨 마지막 데이터 추출
// push, pop은 stack(FILO구조, 선입후출) 이란 자료구조가 필요할 때가 있기에 Array에 구현시켜둠
arr.push(99);
arr[arr.length]=1564; // push와 같은기능
console.log(JSON.stringify(arr)); //data를 문자열로 만들어줌
let v = arr.pop();
console.log(v);
console.log(JSON.stringify(arr), arr.length);