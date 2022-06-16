/*
    for loop는 일정 범위의 수를 사용해야 하는 상황에서도 용이
*/

let target = 3;
for(let val=1; val<=9;val++) {
    console.log(`${target} x ${val} = ${target*val}`);
}

/*
    VIP 1 ==> 2 (10000)
    VIP 2 ==> 3 (40000)
    VIP 3 ==> 4 (90000)
    VIP 4 ==> 5 (160000)
    ...
    VIP 9 ==> 10 (810000)
*/
let total = 0;

for(let vip = 1; vip <= 20; vip++) {
    console.log(`${vip}**2 = ${vip**2}`);
    let exp = vip**2 *10000;  
    total += exp;
    console.log(`${vip} -> ${vip+1} : ${exp} 누적: ${total}`);
}
//=================================================
// vip 5의 구간