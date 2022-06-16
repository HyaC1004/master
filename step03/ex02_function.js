/*
    quadrant란 이름의 function을 만들거임
    작동하는데 number 두개 받아서 첫번째껀 x좌표, 2번째껀 y좌표값이라 가정하고
    해당좌표가 몇 사분면상의 점인지 계산하여 사분면값(number)를 리턴시키는 함수
*/

function quadrant(x, y) {
    let quad;
    if (x === 0 && y === 0) {
        quad = "원점";
    } else if (x === 0) {
        quad = "y축";
    } else if (y === 0) {
        quad = "x축";
    } else if (x > 0) {
        y > 0 ? quad = 1 : quad = 4;
    } else {
        y > 0 ? quad = 2 : quad = 3;
    }
    return quad;
}

console.log(quadrant(0, 0));
console.log(quadrant(0, 1));
console.log(quadrant(1, 0));
console.log(quadrant(1, 1));
console.log(quadrant(-1, 1));
console.log(quadrant(-1, -1));
console.log(quadrant(1, -1));
let q = quadrant(-3. - 2);
console.log(`q = ${q}`);
// 축
