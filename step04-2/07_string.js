/*
    String.prototype에 정의된 것들 (객체를 생성한후 할수 있는것들)
*/
let data = "javascript";
// String 객체는 유사배열객체이다.
// 1. length ==> 문자 갯수
console.log(data.length);
console.log(" 한글의 위대함 ".length); //공백도 문자로 인식
console.log("".length); // length 0짜리 string도 존재한다.

// 2. charAt(number) ==> string 특정위치의 문자 찾기
console.log(data.charAt(1));
// 3. charCodeAt(number) ==> number  특정위치의 문자 코드 알려줌
console.log(data.charCodeAt(0));

let msg = "[단체] 안녕하세요. 6월23일부터 8교시로 전환합니다.";
let bytes = 0;
for(i=0;i<msg.length;i++){
    a = msg.charCodeAt(i);
    bytes += a>255 ? 2:1;
}
console.log(bytes);

let msgArr = Array.from(msg); // 대상이 유사배열이어야 Array.from 가능
console.log(msgArr);
let tot = msgArr.reduce(function(prev,next) {    
    return prev +((next.charCodeAt(0) <= 255) ? 1 : 2);
},0)
console.log(tot);