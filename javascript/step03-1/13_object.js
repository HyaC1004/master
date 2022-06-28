/*
    function은 new를 통해 생성자로서 호출됐는지, 일반 함수로써 호출됏느지
    내부에서 확인할 수 있다. (instanceof 혹은 new.target)
    
    상황에 따라 일반 function으로 호출되더라도 객체가 생성되게 유도할 수 있고
*/

let plus = Function("x", "y", "return x+y");
console.log(plus(3, 5));

let obj = new Object();
console.log(obj);
/*
    new로 사용될대와 그렇지 않을때 작업할 일을 다르게 구현하기도 한다.
*/
let v = new Number("33");
console.log(typeof v);
let vv = Number("33"); // 이제까지 +를 붙여서 숫자로 만들었는데 그 작업을 하는 function
console.log(typeof vv);
