/*
    비슷한 유형의 객체가 있을때 생성자 함수 패턴일때는
    prototype 변경함으로써 설계하였는데,
    class 패턴에서는 extends를 이용해서 설계한다.    
*/
class Block {
    constructor(width, height) {
        console.log("Block constructor");
        this.width = width;
        this.height = height;
    }
    slide() {
        console.log("User.slide");
    }
}
class User extends Block {

}
class Monster extends Block {    
    jump() {

    }
}
// =====================================
const u = new User();
u.slide();
const m = new Monster(100,20);
console.log(m);
m.slide();