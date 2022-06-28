const arr = [[1,2,3],[4,5,6],[7,8,9,10]];

console.log(arr[0][3]);
// console.log(arr[-1][1]); // error뜸 없는 배열에 없는거찾으려하면 

// let obj = {};
// let obj; => err뜸 undefined + undefined
// console.log(obj.data);

// 옵셔널 체이닝 ?.   
// ?로 체크하는 객체가 undefined 혹은 null 이면 뒤의 프로퍼티를 체크하지않고 undefined가 나온다.
let obj;
console.log(obj?.data);  // 에러안뜸
console.log(obj && obj.data);
