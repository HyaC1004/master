/*
    &&, || 의 단축평가 현상
    문자열을 쓰면안되는 이유
*/
console.log(false && true && false); // &&는 false 1개라도 있으면 false
console.log(false || true || false); // ||는 true 1개라도 있으면 true

console.log( !!"Y");
console.log( !!"YES");

console.log("YES" && "yes");
console.log("YES" && "yes" && "No"); // && 뒤에꺼 출력
console.log("YES" || "yes");
console.log("yes" || "YES"); // || 앞에꺼 출력

let country = "KOREA";
console.log(country === ("korea" || "KOREA")); //false 
console.log( !!"");
