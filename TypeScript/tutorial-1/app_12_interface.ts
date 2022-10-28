/*
    typescript는 abstract class뿐만 아니라
    interface라는 개념을 도입했다. (추구하는 바는 abstract class랑 비슷)
    = 만들고자 하는 클래스의 설계도 역할
    abstract는 미완성, 틀, 완성 다 가능
    interface는 패턴, 모양만 잡아주는거
*/
{
    interface Piece {
        x:number;
        y:number;
        moveTo: (dx:number, dy:number) => boolean;
    }
    class RealPiece implements Piece {
        constructor(public x:number, public y:number){}
        moveTo(dx: number, dy: number) {
            return true;
        };
    }
    let xx:Piece = new RealPiece(3,2);

    let p: Piece[] = [{
        x:0, y:0,
        moveTo: (dx:number, dy:number)=>{
            if(Math.random()>0.5){
                return true;
            } else {
                return false;
            }
        }
    }]
}