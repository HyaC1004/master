"use strict";
/*
    typescript는 abstract class뿐만 아니라
    interface라는 개념을 도입했다. (추구하는 바는 abstract class랑 비슷)

    type이랑 interface랑 거의 비슷한듯
*/
{
    class RealPiece {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        moveTo(dx, dy) {
            return true;
        }
        ;
    }
    let p = {
        x: 1, y: 1,
        moveTo(dx, dy) {
            return false;
        }
    };
}
