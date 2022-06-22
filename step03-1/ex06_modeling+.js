function Bishop (x,y,color="B") {
    if (!new.target) {
        return;
    }
    this.x=x;
    this.y=y;
    this.color=color;
}
Bishop.prototype.move = function(tx,ty) {
    this.x = tx;
    this.y = ty;
}
Bishop.prototype.isMoveable = function (tx, ty) {
    if (this.isValid(tx, ty)) {
        let dx = Math.abs(tx - this.x);
        let dy = Math.abs(ty - this.y);
        if (dx === dy) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
Bishop.prototype.isValid = function (tx, ty) {
    if (tx < 0 || tx > 7 || ty < 0 || ty > 7) {
        return false;
    } else {
        return true;
    }
}
const b1=new Bishop(3,1);
console.log(b1);
console.log("move" in b1);
for (let mx = 0; mx<=7; mx ++) {
    for (let my= 0; my <=7;my++) {
        //console.log(mx,my);
        if(b1.isMoveable(mx,my)) {
            console.log(mx,my);
        }
    }
}