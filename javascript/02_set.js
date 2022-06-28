const set1 = new Set(); // 비어있는 set이 나옴
/*
    set객체의 size변수 (요소 개수)
*/
//console.log(set1.size);
/*
    Set객체의 function
    add, has, delete, clear     // 동일객체라고 판단하는게 === 일때라서
*/
// add(value) ==> this
set1.add(3).add(3).add(4);
console.log(set1);
set1.add(3);
console.log(set1.size);
let obj = 0;
set1.add(obj);
console.log(set1.size);
set1.add({name:"최현",age:27});  // 내부 data는 같더라도 동일한 객체는 아니기 때문에 저장
console.log(set1.size);  

console.log(set1.has(3));   // has(value) ===> boolean  data 갖고있는지 체크
set1.delete(55);            // delete(value) ===> boolean
set1.clear();               // clear() ===> void
console.log(set1.size);  