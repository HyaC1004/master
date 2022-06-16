/*
    Bishop 이라는 타입의 객체를 설계 
    color: "W" , "B"
    x : number (0~7)
    y : number (0~7)
    ==============================
    move : function(tx,ty) : x,y 값을 바꿀 용도 return x
    isMoveable : function(tx, ty) : 
        this.x, this.y 기준으로 해당 tx,ty로 이동가능한가??
        return true or false
        이동불가능 상황 : 상하좌우,벽
    new Bishop(3,1); // 3번째값 안들어오면 default "B"
    new Bishop(3,1,"W");

*/
/*
    let absX = tx-this.x > 0 ? tx-this.x : this.x-tx;
    let absY = ty-this.y > 0 ? ty-this.y : this.y-ty;
    if( (absX) === (absY)) {
        if ((tx >= 0 && tx<= 7)||(ty>= 0 && ty<= 7)){
            this.x = tx;
            this.y = ty;
        }
    }
*/
function Bishop(x, y, color = "B") {
    if (new.target) {
        return;
    }
    this.x = x;
    this.y = y;
    this.color = color;
    this.move = function (tx, ty) {
        this.x = tx;
        this.y = ty;
    }
    this.isMoveable = function (tx, ty) {
        if (this.isValid(tx, ty)) {
            let dx = Math.abs(tx - x);
            let dy = Math.abs(ty - y);
            if (dx === dy) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    this.isValid = function (tx, ty) {
        if (tx < 0 || tx > 7 || ty < 0 || ty > 7) {
            return false;
        } else {
            return true;
        }
    }
}
/*
Bishop.prototype.move = function (tx, ty) {
    this.x = tx;
    this.y = ty;
}
*/
/*
Bishop.prototype.isMoveable = function (tx, ty) {
    // (0,0) 8넘었을때, x,y값 다를때 
    let absX = tx - this.x > 0 ? tx - this.x : this.x - tx;
    let absY = ty - this.y > 0 ? ty - this.y : this.y - ty;
    if ((absX / absY) === 1 || (absX / absY) === -1) {
        if ((tx >= 0 && tx <= 7) || (ty >= 0 && ty <= 7)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    
    
}*/
let a = new Bishop(1, 2);
let b = new Bishop(3, 4, "W");
console.log(a.x, a.y, a.color);
console.log(b.x, b.y, b.color);
console.log(b.x, b.y);

for (let mx = 0; mx<=7; mx ++) {
    for (let my= 0; my <=7;my++) {
        //console.log(mx,my);
        if(a.isMoveable(mx,my)) {
            console.log(mx,my);
        }
    }
}