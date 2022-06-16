/*
    가위, 바위, 보 완성시키기
*/
const read = require("readline-sync");
console.log("                              ");
console.log("                              ");
console.log(" 0        0      00000        ");
console.log("  0      0      0             ");
console.log("   0    0        00000        ");
console.log("    0  0              0       ");
console.log("     00          00000        ");
console.log("    What's your choice??      ")
let input = read.keyInSelect(["Scissor", "Rock", "Paper"]);
let r = Math.random(); // 0.0 <= r < 1.0 인 number 생성
let winRate = 0.5; // 확률조작 승률 50
let drawRate = 0.8;
let aiPick = (Math.floor(r * 10)) % 3;
//console.log(`r = ${r}`);
//console.log(aiPick);
//input=aiPick 비김 

if (input !== -1) {
    if (r <= winRate) {
        switch (input) {
            case 0:
                console.log("Your Choice : Scissor");
                console.log("AI's Pick : Paper");
                break;
            case 1:
                console.log("Your Choice : Rock");
                console.log("AI's Pick : Scissor");
                break;
            case 2:
                console.log("Your Choice : Paper");
                console.log("AI's Pick : Rock");
        }
        console.log("Win!!!");
    } else if (r <= drawRate) {
        switch (input) {
            case 0:
                console.log("Your Choice : Scissor");
                console.log("AI's Pick : Scissor");
                break;
            case 1:
                console.log("Your Choice : Rock");
                console.log("AI's Pick : Rock");
                break;
            case 2:
                console.log("Your Choice : Paper");
                console.log("AI's Pick : Paper");
        }
        console.log("Draw! ");
    } else {
        switch (input) {
            case 0:
                console.log("Your Choice : Scissor");
                console.log("AI's Pick : Rock");
                break;
            case 1:
                console.log("Your Choice : Rock");
                console.log("AI's Pick : Paper");
                break;
            case 2:
                console.log("Your Choice : Paper");
                console.log("AI's Pick : Scissor");
        }
        console.log("Lose...");
    }
} else {
    console.log("Canceled.");
}