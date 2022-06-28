/*
    리턴에 대해 알아보기 위해 하나의 function을 먼저 살펴보자.
    Math.round라는 function은 number형 데이터를 매개변수로 받아서
    반올림처리 한 후 number를 만들어낸다.
    이렇게 function의 결과물을 만들어낼때 사용되는게 return
*/
//console.log(Math.round(4.555));
function round(num) {
    console.log("round function worked..! ");
    //return num - num%1;
    let rst = num - num % 1;
    if (num % 1 >= 0.5) {
        rst++;
    }
    return rst;
}
/*
    만약 function에 return이 없으면 자동으로 마지막 잡업에 return;이 추가됨.
    return 뒤에 어떤 밸류를 설정하지 않으면 undefined가 리턴된다.
*/
round(3.141592);
console.log(round(9.6665)); // function의 결과물을 출력
let pi = 3.141592;
let rpi = round(pi);
console.log(rpi);
