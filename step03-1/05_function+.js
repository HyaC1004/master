/*
    2. 중첩함수: 헬퍼함수
*/
let totalFee = function (t1, t2, t3) {
    function sumTimes() {
        return t1??0+t2??0+t3??0
    }
    sumTimes();
    function eachFee(time) {
        let price = 1000;
        let left = time - 30;
        while (left > 0) {
            left -= 10;
            price += 400;
        }
        price = price < 10000 ? price : 10000;
        return price;
    }
    return eachFee(t1 ?? 0) + eachFee(t2 ?? 0) + eachFee(t3 ?? 0);
};
!function() {
    console.log(totalFee(67,34));
    //eachFee(3);//내부함수는 밖에서 쓸수가없음
}();