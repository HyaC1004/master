/*
    일치(불일치) : ==, ===, !=, !== 비교
    ===, !== 쓰는걸 권장
*/
let one = 1000;
let other = 1000;
let another = "1000";

console.log(one == other); // == (값을 비교, 타입이 달라도 같다고 판단될수 있음)
console.log(one === other); // === (값과 타입까지 비교, 타입이 다르면 무조건 다르다고 인식)

console.log(one == another);
console.log(one === another);

console.log(one != another);
console.log(one !== another);