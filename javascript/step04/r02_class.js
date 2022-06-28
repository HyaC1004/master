class Shape {
    x;
    y;
}
class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    area = function() {        
        return this.r**2*3.141592;
    }
    // function 정의를 축약형태로 쓰게되면 prototype처럼 등록
    length() {
        return 2*this.r*3.141592;
    }
}
let c1 = new Circle(2);
let c2 = new Circle(2);
console.log(c1.area === c2.area);       // false
console.log(c1.length === c2.length);   // true