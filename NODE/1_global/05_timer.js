/*
    setTimeout, setInterval, setImmediate 함수를 사용하면
    이 타이머를 제어할 수 있는 TimerID값이 나오게 되는데 이값은
    clearTimeout, clearInterval, clearImmediate에 사용된다.
*/
const intervalID = setInterval(()=>{
    console.log("....");
},500);

const timeoutID = setTimeout(()=>{
    clearInterval(intervalID);
},5000);

const id = setImmediate(()=>{
    clearTimeout(timeoutID);
});

clearImmediate(id);