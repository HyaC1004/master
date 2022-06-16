/*
    number 데이터를 가진 variable은 특별한 연산자가 사용가능
    증감 (++, --)
*/
let win = 0;
console.log(win);
win++;
console.log(win);
++win;  // 앞에 붙여도 댐
console.log(win);
win--;
console.log(win);
/* 
변수를 기준으로 ++ 혹은 --가 앞뒤에 따라 변화시점이 달라짐
++기호가 작동할때 다른 작업에 연계가 되어 있다면 
앞쪽에 붙은기호는 먼저 일어나고
뒤쪽에 붙은거는 나중에 변화가 일어나게된다.
*/

win = 50;
console.log(win++); //값이 출력된 뒤에 더해짐
console.log(win);
console.log(++win);
console.log(win);
console.log(`win = ${win--}`);
console.log(`win = ${--win}`);

let no =10;
//console.log(`no = ${no + ++no + no++ + no}`); // 10+11+11+12
console.log(`no = ${--no + no-- + no + ++no + no++ + no + no--}`); //9+9+8+9+9+10+10
console.log(`no = ${no}`);
//boolean data나 string data를 가진 변수에 이 작업
let str= "hello";
str++;
console.log(str);
console.log(typeof str);
let c=true;
console.log(c);
c++
console.log(c);