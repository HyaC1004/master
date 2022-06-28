function Shape() {

}
Shape.prototype.x = 0;
Shape.prototype.y = 0;

function Circle(r) {
    this.r = r;
    this.area = function() {
        return this.r**2*3.141592;
    };
}
Circle.prototype = Shape.prototype;
Circle.prototype.length = function() {
    return 2*this.r*3.141592;
}
let c1 = new Circle(3);
    c1.area();
    c1.length();
let c2 = new Circle(3);
    console.log(c1.area === c2.area);      //false
    console.log(c1.length === c2.length);  //true
    console.log(c1.x);
