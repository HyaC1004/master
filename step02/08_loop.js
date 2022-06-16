/*
    이번에는 loop 안에서 continue가 일으키는 흐름에 대해 살펴보자.
    (skip의 느낌)
*/

for (let cnt = 1; cnt <= 10; cnt++) {
    if (Math.random() > 0.6) {
        console.log("skip event!! ");
        continue;
    }
    console.log(`loop ~ing: ${cnt}`);
}
let n1 = 32;
let n2 = 26;
for (let val = n1; val >= 1; val--) {
    if (val > n1 || val > n2) {
        continue;
    }
    console.log(`${val}: ${n1%val} && ${n2%val}`);
}