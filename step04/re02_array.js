const arr = [
    ["사과", "바나나", "배"],
    ["배", "수박"],
    ["바나나", "수박", "사과"],
    ["사과", "배", "수박"],
    ["수박"]
];
// console.log(arr[1][2]);
// const sub = arr[1];
// console.log(sub[1]);
// ============================================
// 요소를 3개이상 가지고 있는 배열의 개수 체크
let cnt = 0;
for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx].length >= 3) {
        cnt++;
    }
}
// console.log(cnt);
// ============================================
// 맨 마지막 요소가 수박을 가지고 있는 배열의 개수 체크
cnt = 0;
for (let idx = 0; idx < arr.length; idx++) {
    let sub = arr[idx];
    if (sub[sub.length - 1] === "수박") {
        cnt++;
    }
}
console.log(cnt);

// ============================================
// 첫번째가 사과인 배열의 개수
let n = 0;
for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx][0] === "사과") {
        n++;
    }
}
// console.log(n);
