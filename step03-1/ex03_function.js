/*
    주차시간에 따라서 요금을 계산하는 작업을 해본적이 있다
    그걸 function으로
*/
function parkingFee(time) {
    let price = 1000;
    let left = time - 30;
    while (left > 0) {
        left -= 10;
        price += 400;
    }
    price = price < 10000 ? price : 10000;
    return price;
}

let p = parkingFee(54);
console.log(p); //2200
let p2 = parkingFee(40);
console.log(p2); //1400
console.log(parkingFee(402));