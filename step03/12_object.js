/*
    객체는 여러가지 방법으로 만들어서 사용할 수 있다.
    앞서 살펴본 리터럴에 의한 생성은 1회성 객체를 생성시키는데 있어서
        가장 적합한 방식이다.
    비슷한 구조의 객체가 여러개를 사용해야 된다면 생성자함수를 사용하거나...
        Class를 설계해야 한다.
    생성자 함수를 이용하여 객체를 만드는 법을 보자.
    생성자 함수가 선언법 자체가 달라지는건 아니다.
*/
function abs(num) {
    return num > 0 ? num : -num;
}
let v = new abs(3); // new를 붙인 함수를 생성자 함수라 한다.
console.log(v);

/*
    일반적인 룰에 의하면 생성자 함수는 작명을 할때 첫글자를 대문자로 사용을 한다.
*/
function Circle(r) {
    if(!this instanceof Circle) { // if (this === globalThis)
        return new Circle(r);//일반 함수로 콜됏으면 내부적으로 생성자함수로 바꿔줌
    }
    // 이 안에 { } 가 만들어지고 여기에 this를 이용해서 접근이 가능해지는 상태
    this.radius = r;
    this.calcArea = function() {
        return Math.PI * this.radius**2;
    };
    this.calcDiameter = function() {
        return 2*this.radius;
    };
    // return this; //생략 가능 default값
    // return 1; //new를 사용하여 호출했을때는 무시
}
console.log(Circle(3));//undefined, 1
let r = new Circle(5);
//console.log(r);
//Circle { radius:1, calcArea: [Function (anonymous)] }
console.log(r.radius);
console.log(r.calcArea());

let r2 = new Circle(5);
console.log(r2.calcArea());

console.log(r == r2); //false

console.log(r2 instanceof Circle); // r2 가 Circle 생성자 함수로 만들어졌는지 확인

let r3 = {
    radius:4
};
console.log(r3 instanceof Circle);// false