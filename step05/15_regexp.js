/*
    RegExp 객체를 통해서 test, exec(String match)로 string을 체크해봄
    이번에는 String 객체에서 regexp를 요구하는 function에 대해 알아보자.
*/
let data = "<script>alert();</script>";
console.log(data.match(/</g));

// replace
let cvt = data.replace("<", "&lt;");
console.log(cvt);
cvt = data.replace(/</g,"&lt");   // g: global flag 다 찾아줌
console.log(cvt);
console.log(data.replaceAll(">","&gt;"));  ///replacAll 은 정규식이안되고 string만됨

// split
let beuty = "감혜빈|공병구,정상춘^최윤주";
let barr = beuty.split("|");
console.log(barr);
let carr = beuty.split(/[\|,\^]/);
console.log(carr);
let txt = "우리       모두.... 몹시 피곤하다.";
console.log(txt.split(/\s+/));