console.log(new Date(), typeof new Date());
console.log(new Date(1000*60*60*24*365*50));
console.log(new Date("2022-06-22 GMT+9"));
console.log(new Date(2022,5,22));

let today = new Date();
console.log(today.toLocaleString());  
console.log(today.toUTCString());
let now = today.toLocaleDateString();

console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toTimeString());
console.log(today.toTimeString().split(/\s+/)[0]);

// ====>
const weeks = "일,월,화,수,목,금,토".split(",");
console.log(today.getDate());       // 일   
console.log(weeks[today.getDay()]); // 요일(0:일 ~ 6:토)
console.log(today.getHours());      // 시간(0~23)
console.log(today.getMinutes());    // 분
console.log(today.getMonth());      // 달 

console.log(today.getTimezoneOffset()); // 국제표준시와 시스템 시간차이(분)
//========================================================
// set 요일빼고 다바꿈
today.setHours(2);
console.log(today.toLocaleTimeString());
//========================================================
