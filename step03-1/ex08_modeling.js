function Piece() {
    
};
Piece.prototype.move = function(tx,ty) {
    this.x = tx;
    this.y = ty;
};
Piece.prototype.isValid = function(tx,ty) {
    return tx>0 && tx<8 && ty>0 && ty<8; 
};
Piece.prototype.calcMoveRange = function(tx,ty) {
    let dx = Math.abs(tx- this.x);
    let dy = Math.abs(ty- this.y);
    return {dx, dy};
};
Piece.prototype.isMovable = function(tx,ty) {
    return true;
};

//============================================
function Rook(x,y,color="B") {
    if (!new.target) {
        return;
    }    
    this.x = x;
    this.y = y;
    this.color = color;
    this.isMovable = function(tx,ty) {
        //let obj = this.calcMoveRange(tx,ty); //obj.dx, obj.dy
        let {dx, dy}= this.calcMoveRange(tx,ty); //dx dy
        if ((dx === 0 && dy != 0)||(dy === 0 && dx != 0)) {
            return true;        
        } else {
            return false;
        }
    }
}
Rook.prototype = Piece.prototype;
const r = new Rook(3,2);
r.move(5,6);
console.log(r);
console.log(r.isMovable(1,6));
