/*

*/
function createQuiz() {
    let n1 = +(1+Math.random()*10).toFixed(0);
    let n2 = +(1+Math.random()*10).toFixed(0);    
    let obj = {};
    obj.question = `Q. ${n1} + ${n2} = `;
    obj.answer = n1+n2;
    return obj;
    /*
    let question = `Q. ${n1} + ${n2} = `;
    let answer = n1+n2;
    return {question, answer};
    ///let obj = {question: question, answer: answer};
    //return obj;
    */
}
//console.log(createQuiz());

function check(q) {    
    if(q.answer === q.input) {     
        return 10;
    }else {       
        return 0;
    }
}
function check_v2( {answer,input}) {
    if(answer === input) {     
        return 10;
    }else {       
        return 0;
    }
}
!function(){
    const read = require("readline-sync");
    let score=0;
    for(let cnt=1; cnt<=5; cnt++) {        
        let q = createQuiz();
        let n = +(read.question(q.question));
        q.input = n;   
        score += check(q);
    }
    console.log(`final score is ${score}`);
    /*
    let quiz = createQuiz();
    console.log(quiz.question);
    console.log(quiz.answer);

    let {question, answer} = createQuiz();
    */    
}();