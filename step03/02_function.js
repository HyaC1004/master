/*
    의미있는 function을 만들기 위해선
    매개변수(argument)랑 반환값(return)에 대해 알아야한다.
    매개변수 : 
        function이 작동하는 데 있어서 외부로부터 전달받게 될 데이터
*/
//const read = require("readline-sync");
let calledCount = 0;
let avg = function (n1, n2) { // () 안에 데이터를 대입받을 변수만 설정해두면 됨
    // 평균값을 계산하는 기능
    console.log(`${n1} : ${typeof n1}`);
    console.log(`${n2} : ${typeof n2}`);
    var r = (n1+n2)/2; // function 안의 결과 혹은 변수는 밖에서는 알수없다.
    calledCount++;
}
avg(203); // 1개만넣으면 나머진 undefined
avg(21,27);
avg(213,4,5,3,5,23,4,23,4); // 넘치는 부분은 씹힘
//console.log(r); => 못나옴
let average = avg;
average(473, 111);
console.log(calledCount);
