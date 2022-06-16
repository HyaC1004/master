const row = new Array(10);
for (let idx = 0; idx < row.length; idx++) {
    if (Math.random() > 0.75) {
        continue;
    }
    row[idx] = +((Math.random() * 100).toFixed(0));
}
console.log(row);
for(let t=-1;t<=1;t++){
    
}
let idx = 9;
let rst = (row[idx-1]??0) + (row[idx]??0) + (row[idx+1]??0);
console.log(rst);
