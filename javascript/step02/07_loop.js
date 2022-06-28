/*
    loop 문(for, while)은 설정된 조건에 의해 일정한 작업이 반복된다.
    loop 처리중에 break, continue에 의해 조금 다른 흐름이 발생하기도 한다.

    break는 반복에 설정된 조건을 무시하고 바로 반복처리가 멈추게 되어 있고,
    continue는 진행중이던 loop작업을 다 건너뛰고 다시 처음부터 반복작업이 시작된다.
*/

for (let cnt = 1; cnt <= 5; cnt++) {
    if (Math.random() > 0.7) {
        console.log("event!! ");
        break;
    }
    console.log(`loop ~ing at ${cnt}`);
}

console.log("terminated..");
// break를 이용해서 소수 판별을 해보자.
/*
let num = 13;
let prime;
for (let n =2; n<= num-1; n++) {
    console.log(`${num} % ${n} ==> ${num%n}`);
    if (num%n == 0) {
        prime=false;
        break;
    }    
}*/

//console.log(`${num} is Prime number? ${prime??true}`);
//====================================================
// 수치 2개가 확보가 됏을때
let n1 = 42;
let n2 = 8;
//====================================================
// 이 두수의 최대 공약수??
// 확보된 두 수 중에 작은값을 시작으로 -- 해가며 n1과 n2의 나머지를 확인
// 그래서 둘다 나머지 0이면 break; 그 때의 수를 keep 해두면 그게 최대공약수
let start = n1 <= n2 ? n1 : n2;
let gcd;
for (let val = start; val >= 1; val--) {
    if (n2 % val === 0 && n1 % val === 0) {
        //console.log(`최대공약수는 ${val}입니다.`);
        gcd = val;
        break;
    } 
}
console.log(`${n1}과 ${n2}의 최대공약수는 ${gcd}입니다.`);