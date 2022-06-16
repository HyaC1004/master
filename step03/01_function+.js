/*
    Declration방식은 기능까지 Hoisting이 되고,
    Expression방식은 기능은 Hoisting이 안됨.
*/
declare();

function declare() {
    console.log("declare");
}

express(); //실행안댐

let express = function() {
    console.log("express");
}