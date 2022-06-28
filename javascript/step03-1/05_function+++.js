/*
    콜백함수: 매개변수를 통햇허 다른 함수 내부로 전달되는 함수
        콜백함수를 전달받은 함수를 고차함수라고한다.
*/
function runner(fn, cnt) {
    for(let c=1; c<=cnt; c++) {
        fn();
    }
}

function createQuiz() {
    let n1 = (1+Math.random()*10).toFixed(0);
    let n2 = (1+Math.random()*10).toFixed(0);
    console.log(`Q. ${n1}+${n2} = `);
}
//createQuiz();
// runner을 이용해서 creatQuiz가 3번 실행되게 콜을 하려면?
runner(createQuiz,3);
let val = 3;
runner(createQuiz,val);
runner(function() {  //콜백함수
    let n1 = (1+Math.random()*10).toFixed(0);
    let n2 = (1+Math.random()*10).toFixed(0);
    console.log(`Q. ${n1}x${n2} = `);
},5)
//================================
setInterval(function() {
    let n1 = (1+Math.random()*10).toFixed(0);
    let n2 = (1+Math.random()*3).toFixed(0);
    console.log(`Q. ${n1}**${n2} = `);
}, 1500);
