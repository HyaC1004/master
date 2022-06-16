let a = 3;
let b;
if(Number.isNaN(a/b)) { // a/b === NaN은 ===비교가안댐
    console.log("데이터 오류");
} else {
    console.log(a/b);
}
