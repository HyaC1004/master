/*  
    객체나 변수들은 프로토타입을 안 갖고있다.
*/
//console.log(Number.prototype);
test.prototype.log = function(txt) {
    console.log(this.talker+ ":" + txt);
};
test.print = function() {

};
//======================================

//======================================
function test() {
    //console.log(`this.prototype = ${this.prototype}`);
    console.log("=============");
    console.log(this.__proto__);
    console.log("=============");
};
let t = new test();
t.log("xxxx");
for(let p in test){    //in 뒤에가 객체 값이어야댐
    console.log(`property ==> ${p}`);
}
test.print();



let o = {};
//console.log(test.prototype);
//prototype이란 property는 생성자 함수에 달려있다.
//console.log(t.prototype); //완성된 객체에는 prototype이라는 속성이 없다.
//console.log(o.prototype); //완성된 객체에는 prototype이라는 속성이 없다.

console.log(t.__proto__); //__proto__:이미 완성된 객체의 prototype확인하는 변수
console.log(o.__proto__);

console.log(t.__proto__ === test.prototype);