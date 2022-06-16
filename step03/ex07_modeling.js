/*
    prototype 을 변경하는 방식으로 Rook 객체 생성 함수를 만들면 되는데
    Bishop이랑 다 비슷하게 만들면 되는데
    isMovable의 내룡만 바뀌면 됨.
*/
function Rook (x,y,color="B") {
    if(!new.target) {
        return;
    }
    this.x=x;
    this.y=y;
    this.color=color;
}
Rook.prototype.move = function(tx,ty) {
    this.x = tx;
    this.y = ty;
}
Rook.prototype.isValid = function (tx, ty) {
    if (tx < 0 || tx > 7 || ty < 0 || ty > 7) {
        return false;
    } else {
        return true;
    }
}
Rook.prototype.isMovable = function(tx,ty) {
    if (this.isValid(tx, ty)) {
        let dx = Math.abs(tx - this.x);
        let dy = Math.abs(ty - this.y);
        if ((dx === 0 && dy != 0)||(dy === 0 && dx != 0)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
const bp = new Rook(3,4);
console.log(bp);
for (let mx = 0; mx<=7; mx ++) {
    for (let my= 0; my <=7;my++) {
        //console.log(mx,my);
        if(bp.isMovable(mx,my)) {
            console.log(mx,my);
        }
    }
}