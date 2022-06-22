/*
    ex04에서 리터럴방식으로 객체를 정의내려봣는데, 
    이걸 생성자 함수를 통해 만들어지게 Point라는 생성자함수를 만들어주세요.

    생성자 함수는 선언문 혹은 표현식 방식으로만 정의할수 있다.(Arrow가 안됨)
*/
function Point(x,y) {
    // new 함수로 호출됐는지 확인
    if(new.target === undefined) { //if(!new.target)
        return new Point(x,y);
    }
    this.x = x;
    this.y = y;
    this.move = function(tx,ty) {
        this.x = tx;
        this.y = ty;
    };
    this.quadrant = function() {
        if (this.x === 0 && this.y === 0) {
            return "원점";
        } else if (this.x === 0) {
            return "y축";
        } else if (this.y === 0) {
            return "x축";
        } else if (this.x > 0) {
            return this.y > 0 ? "1사분면" : "4사분면";
        } else {
            return this.y > 0 ? "2사분면" : "3사분면";
        }
    };
    this.rangeToZero = function() {
        return (this.x**2 + this.y**2)**0.5;
    };
    this.rotate = function(axis) {
        switch (axis) {
            case "x":
                this.y *= -1;
                break;
            case "y":
                this.x *= -1;
                break;
            case 0:
                this.x *= -1;
                this.y *= -1;
                break;
            default:
                break;
        };
    };
};

let p1 = new Point(3,54);
let p2 = new Point(13, -54);
console.log(p1.move === p2.move);

for(let e in p1) { 
    console.log("=====>" + e);
}
p2.rotate("x");
//p2.rotate("x").rotate("y"); //rotate 함수에 return this를 할 경우 가능
