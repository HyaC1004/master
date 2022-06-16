const row = new Array(10);
for (let idx = 0; idx < row.length; idx++) {
    row[idx] = +((Math.random() * 100).toFixed(0));
}

console.log(row);
function calcSum(idx) {
    // idx 0과 9일때
    if (idx == 0) {
        return row[idx] + row[idx + 1];
    } else if (idx == 9) {
        return row[idx - 1] + row[idx];
    } else {
        return row[idx - 1] + row[idx] + row[idx + 1];
    }
}
console.log(calcSum(0));
console.log(calcSum(5));
console.log(calcSum(9));
