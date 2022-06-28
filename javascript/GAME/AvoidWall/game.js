/*
    1. User, Monster 를 만들기 위한 Base class를 설계
    클래스명은 Rectangle로
    1-1. constructor를 통해 x, y, width, hight를 전달받아 설정될 수 있게,
    1-2. translate를 통해 tx, ty를 x, y 에 += 시키게 설정
    1-3. crashTo 를 통해 값을 전달 받을 수 있게 설정
*/
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    crashWith(other) {        
        // 매개변수로 받은 other로 Rectangle 객체가 들어온다고 생각
        // this의 bottomY가 other의 topY보다 작으면 false
        // this의 topY가 other의 bottomY보다 크면 false
        // this의 rightX가 other의 leftX보다 작으면 false
        // this의 leftX가 other의 rightX보다 크면 false       
        if(this.y+this.height < other.y || this.y > other.y+other.height || this.x+this.width < other.x || this.x > other.x+other.width) { // 충돌안나는경우
            return false;
        } else {
            return true;
        }
    }
    toArray() {
        return [this.x, this.y, this.width, this.height]
    }
}
class Wall extends Rectangle { // width 20~40  
    constructor(speed = 10,color) {
        super(0,0,0,0);        
        let ran = Math.floor(Math.random()*255);
        this.color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        this.speed = speed;        
        this.x = 600;
        this.y = Math.random()*370;
        this.height = 20;        
        this.width = 70+Math.random()*30;

    }
    slide() {
        super.translate(-this.speed,0);        
    }    
}
class User extends Rectangle {
    constructor() {
        super(2,370,25,25);
    }
    fly() {
        super.translate(0,-8);
        if(this.y<0){
            this.y=0;
        }
    }
    fall() {
        super.translate(0,14);
        if(this.y>370) {
            this.y=370;
        }
    }
}
class Monster extends Rectangle {

}
