const read = require("readline-sync");

const words = []; // 사용자가 입력한 값들을 저장할 배열

while(true) {
    let last = words[words.length-1];

    let input = read.question((last??"Type Any Word")+" >> ");
    input = input.toLocaleUpperCase();
    if(last === undefined) {    // 이전에 입력된 단어가 없었다면
        words.push(input);
    } else {    // 그렇지 않았을 때
        if(words.includes(input)) { // 이미 배열에 들어가져있는 단어라면 
            console.log("Duplicated Word! ");
            break;
        } else {
            // 방금 들어온 문자가 이전 단어의 마지막 글자로 시작하는지를 확인
            if(input.startsWith(last.slice(-1))) {
                words.push(input);
            } else {
                console.log("Invalid Word! ");
                break;
            }
        }
    }

}
//========================================
let txt = "teleVISION";
let txtArr = Array.from(txt.toLowerCase());
textArr[0] = textArr[0].toLocaleUpperCase();
let cvt = txtArr.join("");