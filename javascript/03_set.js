/*
    유사배열 객체답게 forEach가 작동함
*/
const n = [1,23,3,2,1,3,3];
n.forEach(function(v,i) {
   // console.log(v,i);   // 인덱스값이 있음
});
const numbers = new Set(n);
numbers.forEach(function(v,i) {
   // console.log(v,i);   // 인덱스값이 없음
});
// ==================================================
const yesterday = new Set(["최현","유유유","이혜주","최윤주","김주완"]);
const today = new Set(["유유유","이혜주","이성훈","김기협"]);
//===================================================
// 합집합, 교집합, 차집합
// 특정기간내 모든 유저 (합집합)
const union = new Set(yesterday);
today.forEach(function(val) {
    union.add(val);
});
console.log(union);
// 연속 출석한 사람 (교집합)
const intersection = new Set();
yesterday.forEach(function(val){    
    if(today.has(val)) {
        intersection.add(val);
    }
});
console.log(intersection);
// today의 신규유저 (차집합)
const difference = new Set();
today.forEach(function(val){    
    if(!intersection.has(val)) {
        difference.add(val);
    }
});
console.log(difference);