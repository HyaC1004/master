const AI = require("./ai.js")
const alpha = new AI("알파고");

// 비동기 방식으로 발생
setTimeout(()=>{
    alpha.emit("sleep",6)
},1000);
alpha.emit("eat","바나나");