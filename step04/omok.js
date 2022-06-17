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