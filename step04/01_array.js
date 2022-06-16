/*
    모든 객체를 다 만들어서 사용할 수도 없기에
    자바스크립트는 프로그래밍에 필요한 객체를 미리 설계해두었다.
    
    그중에서 Array(배열)라는 객체를 살펴보자.
        => 데이터(or 객체)를 관리하기위해서 제공되는 객체이다.
    배열 객체를 만들때는 리터럴 방식으로도 가능하고 생성자 함수로도 가능
*/
let a = [];
let b = new Array();

//============================================
//리터럴 방식이라면 배열 객체를 만들때 데이터를 설정해둘수 있다.
let menu = ["Cola","Coffee","Juice"];
let price = [1000, 300, 700];
console.log(price);
price.fill(1000);   // 생성된 객체(=인스턴스)가 가지고 있는 function은 메서드
console.log(price);
let products = [
    {name:"Cola",price:1000},
    {name:"Coffee",price:300},
    {name:"Juice",price:700}
];
let p = products;
p.fill(0);
console.log(products);
let ar = Array.of("Knight", "Bishop", "Rook");
console.log(ar);

let arr = new Array(30);  //30개의 undefined를 저장
console.log(arr);
//arr.fill(new Person());
//console.log(arr);
