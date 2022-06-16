let panel = new Array(10); // 
for (let idx = 0; idx < panel.length; idx++) {
    panel[idx] = new Array(10);
}

for (let cnt = 1; cnt <= 20; cnt++) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    //console.log(row,col);
    panel[row][col] = 7;
}
console.log(panel);
let tx = 3;
let ty = 4;
//console.log(panel[tx][ty]);
//해당 좌표 기준으로 수평으로 된 곳에 7이 있는지를 확인
for (let rx = 0; rx < 10; rx++) {
    //console.log(panel[ty][rx]);
}
//해당 좌표 기준으로 수직으로 된 곳에 7이 있는지를 확인
for (let ry = 0; ry < 10; ry++) {
    //console.log(panel[ry][tx]);
}
//대각선
for (let ry = 0; ry < 10; ry++) {
    for (let rx = 0; rx < 10; rx++) {
        if (Math.abs(rx - tx) === Math.abs(ry - ty)) {
            if (panel[ry][rx] === undefined) {
                continue;
            } else {
                console.log(panel[ry][rx], `(${rx},${ry})`);
            }
        }
    }
}
