/*
    typescript는 abstract class뿐만 아니라
    interface라는 개념을 도입했다. (추구하는 바는 abstract class랑 비슷)

    type이랑 interface랑 거의 비슷한듯
*/
{
    type Pieces = {
        x:number;
        y:number;
        moveTo: (dx:number, dy:number) => boolean;
    }
    class RealPiece implements Pieces {
        constructor(public x:number, public y:number){}
        moveTo(dx: number, dy: number) {
            return true;
        };
    }

    let p: Pieces = {
        x:1, y:1,
        moveTo(dx:number, dy:number) {
            return false;
        }
    }
}