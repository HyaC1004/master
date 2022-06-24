/*
    Date 객체 = 날짜와 시간을 관리하고자 만들어둔 객체
    - UTC(국제표준시) ? = GMT(그리니치 평균시) 경도 0의 시간
    - KST ? 한국표준시 (UTC+9)
*/
let today = new Date(); // 이때 생성된 시점으로 객체가 만들어짐
                        // 이 코드가 작동한 시스템의 시간을 공유
console.log(today, typeof today);  // 표준시
console.log(today.getTime());
// Date 객체는 내부적으로는 어떤 수치를 하나 가지게 되는데
// 이 수치는 1970.01.01. 00:00:00:000z ~ 부터 현재까지의 밀리세컨드

let d1 = new Date(1000);
console.log(d1);

// static function
let now = Date.now();   // 현재 타이밍의 milisec (1970.01.01~)
console.log(now, typeof now);
let past = Date.UTC(81,0,37); // 그 시간의 milisec
                // year (1900+), month 0~11, date 1~31
console.log(past);
console.log(new Date(past));
/*
    YYYY-MM-DD
    DD/MM/YYYY
    parsing 되는 string format은 몇가지가 있는데 이정도가 generally
*/
let init = Date.parse("2022-06-07 09:00");
console.log(init);
//=================================================================
// 단위는 ms(== 1/1000초)
let prev60 = new Date(Date.now() - (1000*60*60*24*60));
let prev30 = new Date(Date.now() - (1000*60*60*24*30));
let tYear = today.getFullYear();
let tMonth = "0"+(today.getMonth()+1);
let tDate = today.getDate();
//prev30 = prev30.match(/^[0-9]{0,4}-[0-9]{1,2}-[0-9]{1,2}/);
console.log(`${tYear}-${tMonth}-${tDate}`);
