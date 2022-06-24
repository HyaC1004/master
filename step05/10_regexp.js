const { questionEMail } = require("readline-sync");

/*
    RegExp (Regular Expression 정규표현식 : 문자열의 패턴을 표현하기 위한 형식)
        / 정규표현식을 사용하기 위한 객체

    이 패턴정의을 통해서 패턴에 맞는 부분만을 추출하거나
    패턴에 부합하는지 등을 체크할 수 있다.
*/
const str = "apple\nI\tdesk";
//console.log(str);
const pattern = new RegExp("\\d{3}-\\d{4}-\\d{4}");
//console.log("\\d{3}-\\d{4}-\\d{4}");
//console.log("\d{3}-\d{4}-\d{4}");

console.log(pattern.test("010-4614-8225"));
console.log(pattern.test("010-8009-0249"));
console.log(pattern.test("062-451-9999"));
//========================================================
// 정규표현식 객체같은 경우 생성자함수를 통해서 보다는
// 리터럴 방식으로 생성해서 사용한다.

const tel = /\d{3}-\d{4}-\d{4}/;    //   /~/ 사이를 정규표현식으로
console.log(tel, typeof tel); 
// test()는 패턴을 검색해서 해당 패턴의 유무를 true, false로 알려줌
console.log(tel.test("010-4614-8225"));  
console.log(tel.test("010-8009-0249"));     
console.log(tel.test("062-451-9999"));