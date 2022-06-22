/*
    콜백함수 : 매개변수로 넘겨서 사용시킬 목적으로 설계
*/
function noticeTypeA(msg) {
    console.log("[공지]" + msg);
}

function noticeTypeB(msg) {
    console.log("#공지 #" + msg);
}

function todayNotice(fnType, msg) {
    for (let cnt = 1; cnt <= 2; cnt++) {
        fnType(msg);
    }
}
todayNotice(noticeTypeA, "날씨쌀쌀조심");

/*
noticeTypeA("우산 챙기세요");
noticeTypeB("우산 챙기세요");

let todayNotice = Math.random() > 0.5 ? noticeTypeA: noticeTypeB;
todayNotice("겉옷필수"); //함수자체도 대입이 된다.
*/
