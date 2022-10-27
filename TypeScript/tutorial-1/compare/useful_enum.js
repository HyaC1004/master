/*
    전달받은 숫자들을 정렬해서 배열로 만들어내는 함수를 만들어보려고 함
    정렬용 매개변수를 하나 더 전달 받아서 오름이나 내림차순
*/
const DESC = -1;
const ASC = 1;
function combine(order, ...number) {
    if(order === "ASC") {
        return number.sort();
    } else if(order === "DESC") {
        return number.sort().reverse();
    } else {
        return number;
    }
}
//================================
const result = combine("ASC", 43, 5, 2, 4, 5, 65, -2, 43, 56);
console.log(JSON.stringify(result));
