/*
    작업을 다르게 진행되게 유도하는 분기처리 구문이 하나 더 존재하는데
    switch 문이다.
    if 구문이 데이터 상태에 따른 분기처리에 용이하다면,
    switch 구문은 데이터 값에 따른 분기처리에 용이하다.
    const read = require("readline-sync");
*/

let mode = 1;
// switch 안에는 들어갈 데이터 적으면댐
switch (mode) {
    default :
        console.log("case default...1");
        console.log("case default...2");
        break;
    case 1:
        console.log("case 1-1");
        console.log("case 1-2");
        break;
    case 2:
        console.log("case 2-1");
        console.log("case 2-2");
        break;
    case 3:
        console.log("case 3-1");
        break;
    
}