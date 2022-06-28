let circleA = {
    center : {
        x: 3,
        y: 10,
    },
    radius: 3,
    calcArea: function() {
        return Math.PI * this.radius **2;
    },
    calcDiameter: function() {
        return this.radius * 2;
    }
};
console.log(circleA.calcArea());
console.log(circleA.center.x);
console.log(circleA.calcDiameter());
let circleB = {
    radius: 5,
    calcArea: function() {
        return Math.PI * this.radius **2;
    },
    calcDiameter: function() {
        return this.radius * 2;
    }
};
console.log(circleB.calcArea());
console.log(circleB.calcDiameter());
/*
    만약 프로그램 구현에 있어서 비슷한 형태의 객체가 여러개 사용된다면.?
    일일이 이런식으로 정의내려야 할까?
*/