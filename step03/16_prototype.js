/*    
*/
function Circle() {

}
Circle.prototype.getArea = function() {
    return this.radius **2 *3.14;
}
Circle.prototype.change = function(radius) {
    this.radius = radius;
}
Circle.prototype.center = {x: 0, y: 0};
Circle.prototype.radius = 1;
const c = new Circle();
console.log( "change" in c); // 뒤에 있는 객체가 앞에있는 프로퍼티가 있는가?
//==============================================
let c1 = new Circle();
let c2 = new Circle();
console.log(c1.radius === c2.radius);
console.log(c1.change === c2.change);
console.log(c1.center === c2.center);
c1.change(5);
console.log(c1.radius === c2.radius);
console.log(c1.center);
c1.center.x=10;
console.log(c1.center);
console.log(c2.center);
// prototype으로 기본베이스 설계할 때 대부분 function 설정을 해둔다.
