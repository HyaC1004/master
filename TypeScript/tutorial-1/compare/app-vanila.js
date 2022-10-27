/*
    number 배열을 매개변수로 받아서,
    평균을 구해주는 function을 만들어봅시다.
*/
const numbers = [1,2,3,4,5,6,7,8,9,10];
function averageCalc (num) {
    let sum = 0;
    num.forEach((one)=>{
        sum += one
    });
    return sum/num.length;
};
const rst = averageCalc(numbers);
console.log(rst);