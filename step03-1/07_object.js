/*
    
*/
let nick = "최현";
let age = 27;
//================================================
let pA = {nick: nick, age: age};
//console.log(pA);
let pB = {nick, age}; //변수만 넣어도 프로퍼티로 드감
//console.log(pB);
//================================================
let point = {x: 3, y: -2, z: 3};
//console.log(point.x);
// x, y라는 변수를 선언해서 x에는 point의 x값을, y에는 point의 y값을 설정
//let x = point.x;
//let y = point.y;
let {x,y} = point;
console.log(x,y);
//let {kor, eng} = {} //변수로 kor, eng 선언
let {kor: iKor, eng:iEng} = { //iKor, iEng 변수선언 kor, eng는 밖에서 사용불가능
    kor: 79,
    math: 100,
    eng: 89
};
console.log(iKor,iEng);