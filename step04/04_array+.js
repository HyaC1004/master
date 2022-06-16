let panel = new Array(10); // 
for(let idx = 0; idx<panel.length; idx++){
    panel[idx] = new Array(10);
}

for(let cnt=1; cnt<=20; cnt++) {
    let row = Math.floor(Math.random()*10);    
    let col = Math.floor(Math.random()*10);
    //console.log(row,col);
    panel[row][col] = 7;
}
console.log(panel);

let tx = 3;
let ty = 4;
console.log(panel[tx][ty]);