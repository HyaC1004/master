/*
    typescript 변수 / 함수 / 클래스
    abstract라는걸 사용할수 있게됨
    class나 function에 비슷한 유형의 객체의 상위모델을 설계할때 사용할수있음
*/
{
    abstract class Piece {
        x!: number;
        y!: number;
        moveTo(dx:number, dy:number){
            this.x = dx;
            this.y = dy;
        };
        // 위랑 다르게 틀만잡아주는것
        abstract possibleTo(dx:number, dy:number): boolean;
    }
    class Pawn extends Piece {
        constructor(x:number, y:number) {
            super();
            this.x = x;
            this.y = y;
        }
        possibleTo(dx: number, dy: number) {
            return Math.random()>0.2
        }
    }
    let pp: Pawn = {
        x:1, y:3,
        moveTo(x,y) {},
        possibleTo(x,y){
            return true;
        }
    }

    function userInputHandle(target: Piece, uX: number, uY: number) {
        if (target.possibleTo(uX, uY)) {
          target.moveTo(uX, uY);
        }
    }
    
    class Container {
        constructor(public data:any) {}
        print(){
            console.log("["+this.data+"]");
        }
    }
    let x:Container = new Container(2);
    let xx: Container = {
        data:1, 
        print: () =>{
            console.log("!!!");
        }
    }
}