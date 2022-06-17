/*
    이중배열 [[],[],.....]을 이용해서 오목
    => 8방향중 아무방향으로
      5개의 연속된 데이터를 먼저 집어넣는 사람이 이기는 게임  

console.log(win);
*/
// 위에서 만들어진 배열의 마지막칸에 숫자 1을 집어넣기 위해서는 
// 그전 마지막 데이터가 -1 이여야되고, 뒤에서 앞으로 찾아나가면서 1이 있어야한다.
// 1. 놓을수 있는지 체크
// 2. 클릭(놓았을 때) 데이터값 변경
// 3. 점수
// 4. 현재 유저 바꿔주기
// 5. 초기화
// 6. 못넣는곳 알려주기
function OthelloEngine() {
    this.user = -1;
    this.possibleRoute = {}; //
    this.size = 8;
    this.panel = new Array(8);
    for (let idx = 0; idx < 8; idx++) {
        let temp = new Array(8);
        this.panel[idx] = temp;        
    }
};

// 초기화
OthelloEngine.prototype.init = function () {
    this.panel[3][3] = 1;    
    this.panel[3][4] = -1;    
    this.panel[4][3] = -1;
    this.panel[4][4] = 1;
};
// 점수계산
OthelloEngine.prototype.getScore = function () {   
    let userA = 0; // -1
    let userB = 0; // 1
    for(let row = 0; row<8; row++){
        let each = this.panel[row];
        for (let col=0;col<8;col++) {
            if(each[col]==-1){
                userA++;
            }else if (each[col]==1) {
                userB++;
            }        
        }
    }
    return {userA, userB};
};
// 현재 유저 바꿔주기
OthelloEngine.prototype.switchUser = function(){
    this.user *= -1;
    this.possibleRoute = {};    
    return this.user;
};
// 해당 위치에 데이터를 집어넣을 수 있는지 체크
OthelloEngine.prototype.isAble = function (trow, tcol) { // 놓을 수 있는지 체크
    //8방향중에 -1 있는지 체크 , 있는 방향 중에 1의 존재 체크
    if(this.panel[tow][tcol]===1||this.panel[tow][tcol]===-1){
        
    }
    let possible = false;
    // 왼쪽    
    possible = false;
    if(tcol-1>=0&& this.panel[trow][tcol-1] === -(this.user)){
        for(let idx = tcol-1; idx>=0;idx--){
            //console.log("4");
            if(this.panel[trow][idx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.left = possible;
    // 오른쪽    
    possible = false;
    if(tcol+1<8 && this.panel[trow][tcol+1] === -(this.user)){
        for(let idx = tcol+1; idx<8;idx++){
            //console.log("6");
            if(this.panel[trow][idx] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.right = possible;
    // 위    
    possible = false;
    if(trow-1>=0&& this.panel[trow-1][tcol] === -(this.user)){
        for(let idx = trow-1; idx>=0;idx--){
            //console.log("8");
            if(this.panel[idx][tcol] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.top = possible;
    // 아래    
    possible = false;
    if(trow+1<8&& this.panel[trow+1][tcol] === -(this.user)){
        for(let idx = trow+1; idx<8;idx++){
            //console.log("2");
            if(this.panel[idx][tcol] === this.user) {
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.bottom = possible;
    // 오른쪽 위
    possible = false;
    if(trow-1>=0 && tcol+1<8 && this.panel[trow-1][tcol+1] === -(this.user)) {
        for (let ridx = trow - 1, cidx = tcol + 1; ridx >= 0 && cidx < 8; ridx--, cidx++) {
            //console.log("9");
            if(this.panel[ridx][cidx]===this.user){
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.rightTop = possible;
    // 오른쪽 아래
    possible = false;
    if(trow+1< 8 && tcol+1<8 && this.panel[trow+1][tcol+1] === -(this.user)) {
        for (let ridx = trow+1, cidx = tcol + 1; ridx < 8 && cidx < 8; ridx++, cidx++) {
            //console.log("3");
            if(this.panel[ridx][cidx]===this.user){
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.rightBottom = possible;
    // 왼쪽 위
    possible = false;
    if(trow-1>=0 && tcol-1>=0 && this.panel[trow-1][tcol-1] === -(this.user)) {
        for (let ridx = trow - 1, cidx = tcol - 1; ridx >= 0 && cidx >=0; ridx--, cidx--) {
            //console.log("7");
            if(this.panel[ridx][cidx]===this.user){
                possible = true;
                break;
            }
        }
    }
    this.possibleRoute.leftTop = possible;
    // 왼쪽 아래
    possible = false;
    if(trow+1<8 && tcol-1>=0 && this.panel[trow+1][tcol-1] === -(this.user)) {
        for (let ridx = trow + 1, cidx = tcol - 1; ridx < 8 && cidx >= 0 ; ridx++, cidx--) {
            //console.log("1");
            if(this.panel[ridx][cidx]===this.user){
                possible = true;
                break;
            }
        }
    }   
    this.possibleRoute.leftBottom = possible;
    // 대각선 체크    
    possible = false;    
    if((trow-1>=0 && tcol+1<8 && this.panel[trow-1][tcol+1])||(trow+1<8 && tcol-1>=0 && this.panel[trow+1][tcol-1])||(trow+1< 8 && tcol+1<8 && this.panel[trow+1][tcol+1])||trow-1>=0 && tcol-1>=0 && this.panel[trow-1][tcol-1] === -(this.user)) {
        for(let r=0; r<8 ; r++){
            for(let c=0; c<8; c++) {
                //console.log("5");
                if (Math.abs(r - trow) === Math.abs(c - tcol)) {
                    if (this.panel[Math.abs(r - trow)][Math.abs(c - tcol)] === this.user) {
                        possible = true;
                        break;
                    } 
                }
            }
        }
    }     
    //this.possibleRoute.cross = possible;
    return this.possibleRoute.left || this.possibleRoute.top || this.possibleRoute.right || this.possibleRoute.bottom || 
    this.possibleRoute.leftTop || this.possibleRoute.rightTop || this.possibleRoute.leftBottom || this.possibleRoute.rightBottom;
};
// 놓을 수 있는곳에 데이터가 들어갔을때 후처리
OthelloEngine.prototype.proceed = function (trow, tcol) {
    // 좌측
    if(this.possibleRoute.left) {
        for(let idx = tcol-1; idx>=0; idx--) {
            if(this.panel[trow][idx]===this.user) {
                break;
            } else {
                this.panel[trow][idx]=this.user;
            }
        }
    }
    // 우측
    if(this.possibleRoute.right) {
        for(let idx = tcol+1; idx<8; idx++) {
            if(this.panel[trow][idx]===this.user) {
                break;
            } else {
                this.panel[trow][idx]=this.user;
            }
        }
    }
    // 위쪽
    if(this.possibleRoute.top) {
        for(let idx = trow-1; idx>=0; idx--) {
            if(this.panel[idx][tcol]===this.user) {
                break;
            } else {
                this.panel[idx][tcol]=this.user;
            }
        }
    }
    // 아래쪽
    if(this.possibleRoute.bottom) {
        for(let idx = trow+1; idx<8; idx++) {
            console.log("2p");
            if(this.panel[idx][tcol]===this.user) {
                break;
            } else {
                this.panel[idx][tcol]=this.user;
            }
        }
    }
    // 우측위
    if(this.possibleRoute.rightTop) {
        for (let ridx = trow - 1, cidx = tcol + 1; ridx >= 0 && cidx < 8; ridx--, cidx++) {
            if(this.panel[ridx][cidx]===this.user) {
                break;
            } else {
                this.panel[ridx][cidx]=this.user;
            }
        }
    }
    // 좌측위
    if(this.possibleRoute.leftTop) {
        for (let ridx = trow - 1, cidx = tcol - 1; ridx >= 0 && cidx >=0; ridx--, cidx--) {
            if(this.panel[ridx][cidx]===this.user) {
                break;
            } else {
                this.panel[ridx][cidx]=this.user;
            }
        }
    }
    if(this.possibleRoute.rightBottom) {
        for (let ridx = trow+1, cidx = tcol + 1; ridx < 8 && cidx < 8; ridx++, cidx++) {
            if(this.panel[ridx][cidx]===this.user) {
                break;
            } else {
                this.panel[ridx][cidx]=this.user;
            }
        }
    }
    if(this.possibleRoute.leftBottom) {
        for (let ridx = trow + 1, cidx = tcol - 1; ridx < 8 && cidx >= 0 ; ridx++, cidx--) {
            if(this.panel[ridx][cidx]===this.user) {
                break;
            } else {
                this.panel[ridx][cidx]=this.user;
            }
        }
    }
    
    /*
    if(this.possibleRoute.cross) {
        for(let r=0; r<8 ; r++){
            for(let c=0; c<8; c++) {
                console.log("5p");                
                if (this.panel[Math.abs(r - trow)][Math.abs(c - tcol)] === this.user) {
                    break;
                } else {
                    this.panel[Math.abs(r - trow)][Math.abs(c - tcol)] = this.user
                }                    
            }
        }
    }
    */
    this.panel[trow][tcol] = this.user;    
};


/*
// 우측
if(arr[arr.length-1] != data ) { // 전 데이터 -1인지 체크
    let find;
    for (let idx = arr.length-1;idx>0;idx-- ){ //전 데이터들중 1이 있는지
        if(arr[idx] === data) {
            find = true;
            break;
        }
    }
    if(find){
        arr[arr.length]=data;
    }
}
// 좌측 
if(arr[arr.length-1] != data ) { // 전 데이터 -1인지 체크
    let find;
    for (let idx = arr.length-1;idx>0;idx-- ){ //전 데이터들중 1이 있는지
        if(arr[idx] === data) {
            find = true;
            break;
        }
    }
    if(find){
        arr[arr.length]=data;
        for(let idx=arr.length-1;idx>0;idx--) {
            if(arr[idx]==data){
                break;
            } else {
                arr[idx] =data;
            }
        }
    }
}
console.log(arr);*/