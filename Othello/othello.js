function OthelloEngine() {
    this.user = -1; // 현재 플레이어의 데이터 값
    this.possibleRoute = {};    // 현재 플레이어의 가능한 경로
    this.size = 8;
    this.panel = new Array(8);
    for (let idx = 0; idx < 8; idx++) {
        let temp = new Array(8);
        this.panel[idx] = temp;
    }
    //========================================
}
// =================================
// 0. 초기화
OthelloEngine.prototype.init = function () {
    this.panel[3][3] = 1;
    this.panel[4][4] = 1;
    this.panel[3][4] = -1;
    this.panel[4][3] = -1;
};
// 4. 점수.?
OthelloEngine.prototype.getScore = function () {
    let userA = 0; // -1
    let userB = 0;  // 1 
    for (let row = 0; row < 8; row++) {
        let each = this.panel[row];
        for (let col = 0; col < 8; col++) {
            // userA += (each[col] == -1);
            // userB += (each[col] == 1);
            if (each[col] == -1) {
                userA++;
            } else if (each[col] == 1) {
                userB++;
            }
        }
    }
    return { userA, userB };
}
// 5. 현재 유저 바꿔주기
OthelloEngine.prototype.switchUser = function () {
    this.user *= -1;
    this.possibleRoute = {};
    return this.user;
}
// 1. 놓을수 있는 위치를 알려주는 기능 + 2. 못놓는 곳일때 알려주는 기능 
// =====> 해당 위치에 데이터를 집어넣을 수 있는지 ? 체크하는
OthelloEngine.prototype.isAble = function (trow, tcol) {
    console.log(!this.panel[trow][tcol]);
    if (this.panel[trow][tcol] !== undefined) {
        return false;
    }
    let possible;
    // 1. 왼쪽
    possible = false;
    if (tcol - 1 >= 0 && this.panel[trow][tcol - 1] === -this.user) {
        for (let idx = tcol - 1; idx >= 0; idx--) {
            if (this.panel[trow][idx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.left = possible;
    // 2. 왼쪽 위
    possible = false;
    if (tcol - 1 >= 0 && trow - 1 >= 0 && this.panel[trow - 1][tcol - 1] === -this.user) {
        for (let ridx = trow - 1, cidx = tcol - 1; ridx >= 0 && cidx >= 0; ridx--, cidx--) {
            if (this.panel[ridx][cidx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.leftTop = possible;

    // 3. 위
    possible = false;
    if (trow - 1 >= 0 && this.panel[trow - 1][tcol] === -this.user) {
        for (let ridx = trow - 1; ridx >= 0; ridx--) {

            if (this.panel[ridx][tcol] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.top = possible;



    // 4. 오른쪽 위
    possible = false;
    if (trow - 1 >= 0 && tcol + 1 < 8 && this.panel[trow - 1][tcol + 1] === -this.user) {
        for (let ridx = trow - 1, cidx = tcol + 1; ridx >= 0 && cidx < 8; ridx--, cidx++) {
            if (this.panel[ridx][cidx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.rightTop = possible;

    // 5. 오른쪽
    possible = false;
    if (tcol + 1 <= 7 && this.panel[trow][tcol + 1] === -this.user) {
        for (let idx = tcol + 1; idx <= 7; idx++) {
            if (this.panel[trow][idx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.right = possible;

    // 6.오른쪽아래
    possible = false;
    if (tcol + 1 <= 7 && trow + 1 <= 7 && this.panel[trow + 1][tcol + 1] === -this.user) {
        for (let ridx = trow + 1, cidx = tcol + 1; ridx <= 7 && cidx <= 7; ridx++, cidx++) {
            if (this.panel[ridx][cidx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.rightBottom = possible;

    // 7. 아래
    possible = false;
    if (trow + 1 <= 7 && this.panel[trow + 1][tcol] === -this.user) {
        for (let ridx = trow + 1; ridx <= 7; ridx++) {
            if (this.panel[ridx][tcol] === this.user) {
                possible = true;
                break;
            }
        }
    }

    this.possibleRoute.bottom = possible;
    // 8.왼쪽아래
    possible = false;
    if (tcol - 1 >= 0 && trow + 1 <= 7 && this.panel[trow + 1][tcol - 1] === -this.user) {
        for (let ridx = trow + 1, cidx = tcol - 1; ridx <= 7 && cidx >= 0; ridx++, cidx--) {
            if (this.panel[ridx][cidx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.leftBottom = possible;
    // 
    return this.possibleRoute.left || this.possibleRoute.leftTop || this.possibleRoute.top ||
        this.possibleRoute.rightTop || this.possibleRoute.right || this.possibleRoute.rightBottom ||
        this.possibleRoute.bottom || this.possibleRoute.leftBottom;
}
// 3. 놓을수 있는 곳에 데이터가 들어갔을때 후처리

OthelloEngine.prototype.proceed = function (trow, tcol) {
    this.panel[trow][tcol] = this.user;
    // 1. 왼쪽
    if (this.possibleRoute.left) {
        for (let idx = tcol - 1; idx >= 0; idx--) {
            if (this.panel[trow][idx] === this.user) {
                break;
            } else {
                this.panel[trow][idx] = this.user;
            }
        }
    }
    // 2. 왼쪽 위
    if (this.possibleRoute.leftTop) {
        for (let ridx = trow - 1, cidx = tcol - 1; ; ridx--, cidx--) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
    // 3.위
    if (this.possibleRoute.top) {
        for (let ridx = trow - 1, cidx = tcol; ; ridx--) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
    // 4.오른쪽 위
    if (this.possibleRoute.rightTop) {
        for (let ridx = trow - 1, cidx = tcol + 1; ; ridx--, cidx++) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
    // 5.오른쪽
    if (this.possibleRoute.right) {
        for (let ridx = trow, cidx = tcol + 1; ; cidx++) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
    // 6.오른쪽아래
    if (this.possibleRoute.rightBottom) {
        for (let ridx = trow + 1, cidx = tcol + 1; ; ridx++, cidx++) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
    // 7. 아래
    if (this.possibleRoute.bottom) {
        for (let ridx = trow + 1, cidx = tcol; ; ridx++) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
    // 8.왼쪽아래
    if (this.possibleRoute.leftBottom) {
        for (let ridx = trow + 1, cidx = tcol - 1; ; ridx++, cidx--) {
            if (this.panel[ridx][cidx] === this.user) {
                break;
            } else {
                this.panel[ridx][cidx] = this.user;
            }
        }
    }
}

