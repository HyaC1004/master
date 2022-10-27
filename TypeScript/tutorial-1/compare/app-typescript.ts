/*
    number 배열을 매개변수로 받아서,
    평균을 구해주는 function을 만들어봅시다.
*/
{const nums = [1,2,3,4,5,6,7,8,9,10];
function averageCalcts (num:number[]) {
    let sum = 0;
    num.forEach((one)=>{
        sum += one
    });
    return sum/num.length;
};
const result = averageCalcts(nums);
console.log(result);}
/*
    typescript 코드는 javascript로 변환되서 작동하게 됨.
    (변환단계에서 문법적인 오류를 체크를 한다.)

    변환을 하기 위해서 typescript환경을 구축해야되는데
    npm i typescript -g
    tsc _______.ts  ==>  _________.js 파일이 생성됨.
    ts코드는 자바스크립트로 변환되서 작동되게 됨.
*/