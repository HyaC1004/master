const ar = ["월","화","수"];

ar[0];  // 맨 첫번째 데이터(요소)의 키 (인덱스)가 0!
        // 배열 객체의 첫번째 요소의 인덱스는 0
ar[0] = "MON";
console.log(ar);
// 배열객체에는 length라는 property가 있는데 ==> 데이터의 개수
console.log(ar.length+ "/"+ typeof ar.length);
//ar[9] = "????"; // 9번째에 데이터 추가 및 변경
//console.log(ar.length+ "/"+ typeof ar.length);
ar[ar.length] = "xxx";
ar[ar.length] = "xxxX"; // 마지막에 데이터 추가

console.log(ar);
ar[10] ={};

for(let idx = 0; idx<ar.length; idx++) {
    console.log(`${idx} ==> ${ar[idx]}`);
}
console.log("===============");
for(let key in ar) {    // ar index 조회
    console.log(`${key} ==> ${ar[key]}`);
}
for(let val of ar) {    // ar data값 조회
    if(!val){ continue;}
    console.log(val);
}