//상태를 나타내는 데이터

// 1. undefiend 변수를 선언 후 초기화가 일어나기 전 상태
console.log(undefined); 
let v1;
console.log(v1);
// 2. NaN 숫자가 아닌 상태
console.log(NaN);
console.log(+"숫자");
// 3. Infinity, -Infinity
console.log(Infinity);
console.log(-Infinity);
console.log(3/0);
// 4. null : 비어있는, 존재하지 않는
console.log(null);
let d;
console.log(d === undefined); 
d = null;
console.log(d === undefined); 
