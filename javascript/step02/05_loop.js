/*
    데이터 처리에는 분기처리 만큼 기본이 되는 반복처리 라는 것이 있다.
    while, for 라는 구문이 있다. 각기 반복처리가 유리한 상황들이 다르다.
    1. while 구문
        - if 구문의 형태와 비슷하게 데이터 상태가 조건으로 설정되며
*/
/*
let x = 10;

while (x > 0) {
    console.log(`${x}초 후 폭발합니다.`);
    x--;   
}
console.log("뻥이지롱ㅎㅎ");
*/
let time = 81;
let price = 1000;
let left = time - 30; // 30분 오버되는 부분만 계산
if (left > 0) {
    while (left > 0) {
        //console.log(`계산 전 가격 : ${price} / 계산 전 시간 : ${left} `);
        left -= 10;
        price += 400;
        //console.log(`계산 후 가격 : ${price} / 계산 후 시간 : ${left} `);
    }
} else {
    price;
}
console.log(`주차요금 : ${price}`);