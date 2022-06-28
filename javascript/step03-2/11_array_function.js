/*
    forEach: 배열요소들을 차례대로 하나씩 인자로 해서 콜백함수를 작동시켜줌
*/
const numbers = [3,4,25,6,7,45,5,47];
const copy = [];

let total=0;
numbers.forEach(function(val, idx){
    //console.log(this);
    console.log(val,idx);
    total += val;
    copy.push(val);
    if(val=== undefined) {
        //break;  // 반복문처럼 작동하더라도 break는 안먹힘
    }
}, numbers);    // Arg 부분을 입력안하면 global this가 출력되는데 numbers 입력하면 numbers가댐
console.log(total);
