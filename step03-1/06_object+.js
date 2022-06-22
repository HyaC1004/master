/*
    producet가 coffee고 price가 300인 객체 리터럴 작성해서 그 객체를 변수에 저장
        + amount 32
    %프로퍼티 간에는 콤마(,) 붙여줘야 하고, 프포퍼티 값 설정 할때 콜론(:)
*/
let cf = {
    product: "coffee",
    price: 300,
    amount: 32
};
// 변수에 담기는 값은 객체를 접근할 수 있는 값이 들어감
let cf2 = cf;
cf2.price += 100;
console.log(cf2.price);
console.log(cf.price);
console.log(cf.calory);
cf.calory = 20.4;
console.log(cf.calory);
delete cf.product;   // 프로퍼티 삭제
console.log(cf.product);
