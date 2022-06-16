/*
    if를 중첩해서 구문을 작성하면 여러분기를 만들어서 작동되게 구현이 가능하지만
    elseif를 사용하면 다양한 분기점을 조금 쉽게 만들어낼 수 있다.
*/
const read = require("readline-sync");
console.log("What's your choice?? ")
let input = read.keyInSelect(["Scissor", "Rock", "Paper"]);
//console.log(input);

let r = Math.random(); // 0.0 <= r < 1.0 인 number 생성
//console.log(`r = ${r}`);
if (input === -1) {
    console.log("Canceled.");
} else {
    if (r <= 0.33) {    
        console.log("You Win!!");
    } else if (r <= 0.66) {    
        console.log("Lose....");    
    } else {    
        console.log("Draw!");
    }
}

/*
if (r <= 0.33) {
    console.log("AI의 선택 : 바위");
} else {  
    if (r <= 0.66) {
        console.log("AI의 선택 : 가위");
    } else {
        console.log("AI의 선택 : 보");
    } 
}
*/
