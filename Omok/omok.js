function OmokEngine() {
    this.user = -1;
    this.possibleRoute = {}; //
    this.size = 9;
    this.panel = new Array(9);
    for (let idx = 0; idx < 9; idx++) {
        let temp = new Array(9);
        this.panel[idx] = temp;
    }
};
// 돌 놓기
OmokEngine.prototype.doAction = function (trow, tcol) {
    if (this.panel[trow][tcol] !== undefined) {
        alert("놓을 수 없습니다.");
        return false;
    } else {
        this.panel[trow][tcol] = this.user;
    }
    this.user = this.user === -1 ? 1 : -1;
}
// 승리 패배
OmokEngine.prototype.winLose = function () {
    for (let c = 2; c < this.size - 2; c++) {
        for (let r = 0; r < this.size; r++) {
            if (
                // 흑돌이 가로가 5개일 때 숭리
                this.panel[r][c - 2] == -1 &&
                this.panel[r][c - 1] == -1 &&
                this.panel[r][c] == -1 &&
                this.panel[r][c + 1] == -1 &&
                this.panel[r][c + 2] == -1
            ) {
                return this.panel[r][c];
                break;
            } else if (
                // 흑돌이 세로가 5개일 때 숭리
                this.panel[c - 2][r] == -1 &&
                this.panel[c - 1][r] == -1 &&
                this.panel[c][r] == -1 &&
                this.panel[c + 1][r] == -1 &&
                this.panel[c + 2][r] == -1
            ) {
                return this.panel[c][r];
                break;
            }
        }
    }
    for (let c = 2; c < this.size - 2; c++) {
        for (let r = 2; r < this.size - 2; r++) {
            if (
                // 흑돌이 대각선 좌->우 5개일 때 숭리
                this.panel[r - 2][c - 2] == -1 &&
                this.panel[r - 1][c - 1] == -1 &&
                this.panel[r][c] == -1 &&
                this.panel[r + 1][c + 1] == -1 &&
                this.panel[r + 2][c + 2] == -1
            ) {
                return this.panel[r][c];
                break;
            }
            if (
                // 흑돌이 대각선 우->좌 5개일 때 숭리
                this.panel[r + 2][c - 2] == -1 &&
                this.panel[r + 1][c - 1] == -1 &&
                this.panel[r][c] == -1 &&
                this.panel[r - 1][c + 1] == -1 &&
                this.panel[r - 2][c + 2] == -1
            ) {
                return this.panel[r][c];
                break;
            }
        }
    }

    for (let c = 2; c < this.size - 2; c++) {
        for (let r = 0; r < this.size; r++) {
            if (
                // 백돌이 가로가 5개일 때 승리
                this.panel[r][c - 2] == 1 &&
                this.panel[r][c - 1] == 1 &&
                this.panel[r][c] == 1 &&
                this.panel[r][c + 1] == 1 &&
                this.panel[r][c + 2] == 1
            ) {
                return this.panel[r][c];
                break;
            }
            if (
                // 백돌이 세로가 5개일 때 승리
                this.panel[c - 2][r] == 1 &&
                this.panel[c - 1][r] == 1 &&
                this.panel[c][r] == 1 &&
                this.panel[c + 1][r] == 1 &&
                this.panel[c + 2][r] == 1
            ) {
                return this.panel[c][r];
                break;
            }
        }
    }

    for (let c = 2; c < this.size - 2; c++) {
        for (let r = 2; r < this.size - 2; r++) {
            if (
                // 백돌이 대각선 좌->우 5개일 때 승리
                this.panel[r - 2][c - 2] == 1 &&
                this.panel[r - 1][c - 1] == 1 &&
                this.panel[r][c] == 1 &&
                this.panel[r + 1][c + 1] == 1 &&
                this.panel[r + 2][c + 2] == 1
            ) {
                return this.panel[r][c];
                break;
            }
            if (
                // 백돌이 대각선 우->좌 5개일 때 승리
                this.panel[r + 2][c - 2] == 1 &&
                this.panel[r + 1][c - 1] == 1 &&
                this.panel[r][c] == 1 &&
                this.panel[r - 1][c + 1] == 1 &&
                this.panel[r - 2][c + 2] == 1
            ) {
                return this.panel[r][c];
                break;
            }
        }
    }
}
