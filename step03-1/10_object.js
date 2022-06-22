/*
    property로 data와 function을 다 가져도 된다.
        객체전용 헬프함수
*/
let player = {
    nick : "Choi",
    win: 4,
    lose: 1,    
    info: function() {
        console.log(this);
        return `${this.nick}(${this.win}W ${this.lose}L)`;
        //자기 프로퍼티를 this를 이용하여 변수사용
    },
    currentRate: function() {
        return this.win/(this.win+this.lose) *100;
    },
    addRecord : function(dWin = 0, dLose = 0) {
        this.win += dWin;
        this.lose += dLose;
    }
};
console.log(player.addRecord(10,3));
console.log(player.currentRate());
let enemy = {
    nick : "Gam",
    win: 93,
    lose: 27,
    info: function() {
        console.log(this);
        return `${this.nick}(${this.win}W ${this.lose}L)`;
        //자기 프로퍼티를 this를 이용하여 변수사용
    }
};
function calcWinningRate(obj) {
    return obj.win/(obj.win+obj.lose) * 100;
}

console.log(player);
console.log(player.info());
console.log(calcWinningRate(player));
console.log(calcWinningRate(enemy));

console.log(player.currentRate());
player.win += 3;
console.log(player.currentRate());
