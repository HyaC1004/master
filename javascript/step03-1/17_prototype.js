/*
*/
let common = {
    value: -1,
    doAction: function() {
        console.log("doAction...");
    }
}
function Alpha() {    
    //prototype의 function을 추가하면, prototype의 function이 숨겨진다(hiding)
    //이런현상을 오버라이딩이라고 부름.
    this.doAction = function() {
        console.log("Alpha.doAction");
        //다른함수가 prototype함수를 오버라이딩함
    }
}
function Bravo() {
    this.doStudy = function() {
        console.log("Bravo.doSTudy");
    }
}

// 프로토타입은 임의 다른 객체로 변경 가능
Alpha.prototype = common;
Bravo.prototype = common;

Alpha.prototype.go = function() {
    console.log("Gogogo");
}
// console.log(Alpha.prototype);
// console.log(Bravo.prototype);

const a = new Alpha();
const b = new Bravo();
a.go();
console.log(common);
b.go();
/*
console.log(a.value+"/"+b.value);
a.doAction();
b.doAction(); 
b.doStudy();

//delete a.doAction;
//a.doAction();
*/