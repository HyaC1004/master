/*
    point 라는 변수에 객체를 할당하세요
    해당 객체는 아래와 같은 프로퍼티를 갖고 있습니다.
    x : number(맘대로)
    y : number(맘대로)
    객체에 설정된 데이터를 활용하는 function도 갖고있다.
    move: (tx, ty) : return(x)
    quardant() : return number;
    rangeToZero() : return number;
    rotate(axis): return (x)
*/

let point = {
    x: 3,
    y: -2,
    move(tx=0,ty=0) {
        tx += this.x;
        ty += this.y;  
        return `(${tx},${ty})`;
    },
    quadrant() {
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
    },
    rangeToZero() {
        return (this.x**2 + this.y**2)**0.5;
    },
    rotate(axis) {
        switch (axis) {
            case "x":
                this.y = -(this.y);
                break;
            case "y":
                this.x = -(this.x);
                break;
            case 0:
                this.x = -(this.x);
                this.y = -(this.y);
                break;
            default:
                break;
        }
        return `(${this.x},${this.y})`;
    }
};
console.log(point.x,point.y);
console.log(point.move(3,4));
console.log(point.quadrant());
console.log(point.rangeToZero());
console.log(point.rotate("x"));
point.init = function() {
    this.x = 0;
    this.y = 0;
};

