/*
    typescript 변수 / 함수 / 클래스
    private, public, protected
*/
{
    class Point {
        private x: number;
        public readonly y: number; // 읽기전용, 값을 한번 설정하면 안바뀜 const
        constructor(x:number, y:number) {
            this.x = x;
            this.y = y;
        }
        getSquad(): undefined | 1 | 2 | 3 | 4 {
            if(this.x >0 && this.y >0){
                return 1;
            } else {
                return;
            }
        }
    }
    let p:Point = new Point(1,1);

    class Circle {

        constructor(public radius: number){
        }
    }
    let c: Circle = new Circle(4);
    console.log(c.radius);

    class Cone extends Circle {
        height!: number;
        constructor(radius:number, height: number) {
            super(radius);
            this.height = height;
        }
    }
}
