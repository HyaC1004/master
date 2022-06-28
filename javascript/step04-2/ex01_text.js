// 영단어 끝말 잇기
// 영단어 데이터 구축이 안되있는 상태라서
// 사용자가 입력한 단어가 룰에만 어긋나지 않으면 되는것으로 하자
// 1. 마지막 입력단어의 끝글자로 시작해야 된다는 것.
// 2. 한번이라도 입력된 단어는 다시 입력할 수 없다는 것
// 3. 대소문자가 달라도 같다고 처리해주는 것.
const read = require("readline-sync");

const words = ["apple"]; // 사용자가 입력한 단어를 저장할 용도
console.log("Word Concat!!");
while(true) {
    let input = read.question(words[words.length-1]+ " >> "); // 마지막으로 입력한 단어를 출력
    if (words.includes(input)) {
        console.log("이미 입력한 단어입니다. Game Over!!");
        break;        
    }
    words.push(input);
    //사용자가 입력한 첫글자 추출
    let inputFirstLetter = (input.charAt(0)).toLowerCase();
    let wordsLastLetter = (words[words.length-2].charAt(words[words.length-2].length-1)).toLowerCase();
    // console.log(inputFirstLetter);
    // console.log(wordsLastLetter);
    if(inputFirstLetter !== wordsLastLetter){
        console.log(`${wordsLastLetter}를 입력해야하는데 ${inputFirstLetter}를 입력해서 Game Over!`);
        break;
    }     
}
while(false) {
    let lastWord = words[words.length-1];
    let input = read.question(lastWord + " >> "); // 마지막으로 입력한 단어를 출력
    // input의 첫문자가 lastWord 마지막문자랑 같은지
    // lastWord[lastWord.length-1] 이 마지막문자값
    lastWord.charAt(lastWord.length-1);
    lastWord.slice(-1);
    // input이 이글자로 시작하는지 확인?
    //input.startsWith();
    //input[0]== ?? / input.charAt(0) === ??
    /*
    if() {
        words.push(input);
    }
    */
}

