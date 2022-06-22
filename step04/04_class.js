/*
    class로 설계하는 객체에는 getter와 setter 함수를 구현 할수있다.
*/
class Circle {
    #radius;
    constructor(rad) {
        this.#radius=rad;
    }
    get radius() { // 변수인거처럼 작동 호출도 프로퍼티마냥 부르면댐
        return this.#radius;
    }
    get type() {
        return "Circle";
    }
    set radius(val) { // 값을 설정 프로퍼티처럼 호출이가능
        this.#radius = val > 0 ? val : 0; 
    }
}
const c1 = new Circle(10);
//console.log(c1.#radius);
console.log(c1.type);
console.log(c1.radius);
c1.radius=-10;
console.log(c1.radius);