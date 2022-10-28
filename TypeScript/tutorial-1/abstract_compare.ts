
class Queen {
    constructor(private x:number, private y: number) { }
    moveTo(dx:number, dy:number) {
        this.x = dx;
        this.y = dy;
    }
    possibleTo(dx:number, dy:number) {
        return Math.random()>0.5;
    }
}

class Rook {
    constructor(private x:number, private y: number) { }
    moveTo(dx:number, dy:number) {
        this.x = dx;
        this.y = dy;
    }
    possibleTo(dx:number, dy:number) {
        return Math.random()>0.7;
    }
}

function userHandle(inputX:number, inputY:number, target: Queen | Rook) {
    if(target.possibleTo(inputX, inputY)) {
        moveTo(inputX, inputY);
    }
}

let p: Rook = new Rook(3,4);
userHandle(1,1,p);