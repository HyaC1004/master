/*
    Math 클래스는 수학관련 데이터나 기능들이 다 static으로 설정되있다.
*/
console.log(Math.PI);
console.log(Math.E);

Math.abs(-3);  //절대값
Math.round(3.232);  //반올림
Math.floor(3.232);  //내림
Math.ceil(3.232);   //올림
Math.pow(3,4);      //제곱 **
Math.sqrt(49);      //Root
Math.random();      // 0 <=   < 1
//==================================
Math.floor(Math.random()*10); 
//==================================
let arr = [1,23,4,56,7];
Math.max(...arr);
Math.min();
//==================================