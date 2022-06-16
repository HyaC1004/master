/*
    continue는 loop안에서만 의미가 있음
*/
let user;
for (const read = require("readline-sync");;) {
    user = read.question("Input Your Name> ");
    if (user === "") {
        continue;
    }
    console.log(`Hi. ${user}`);
    break;
}
//라벨처리
chat: for (const read = require("readline-sync");;) {
    let cmd = read.question(`${user}. What r u wondering? `);
    switch (cmd) {
        case "javascript":
        case "Javascript": // 둘다 똑같이 처리
            console.log("It's famous programming language.");
            break;
        case "exit":
            break chat; //라벨처리된 for문 break
        default :
            console.log(`Sorry, IDK about ${cmd}. `);
    }
}

