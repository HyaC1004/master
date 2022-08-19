class Currency {
    constructor() {
        this.dollar = 1;
        this.won = 1327.1;
        this.yen = 136.22;
        this.yuan = 6.83;
    }
    setWon(won) {
        this.won = won;
        this.dollar = 1/1327.1 * won; 
        this.yen = 136.22/1327.1 * won;
        this.yuan = 6.83/1327.1 * won;
    }
    setDollar(dollar) {
        this.dollar = dollar;
        this.won = 1327.1/1 * dollar;
        this.yen = 136.22/1 * dollar;
        this.yuan = 6.83/1 * dollar;
    }
    setYen(yen) {
        this.yen = yen;
        this.dollar = 1/136.22 * yen;
        this.won = 1327.1/136.22 * yen
        this.yuan = 6.83/136.22 * yen;
    }
    setYuan(yuan) {
        this.yuan = yuan;
        this.dollar = 1/6.83*yuan;
        this.won = 1327.1/6.83 * yuan;
        this.yen = 136.22/6.83 * yuan;
    }
    lean() {
        return {kr :this.won , us :this.dollar, cn : this.yuan , jp :this.yen };
    }
}

export default Currency;