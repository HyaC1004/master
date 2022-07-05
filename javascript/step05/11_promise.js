const fs = require("fs");
// Promise의 기본구조

new Promise((resolve, reject) => {  // 매개변수 2개받고
    fs.readFile("javascript/source.txt","utf-8",function(err,data){        
        resolve(data);  // promise와 then 을 연결해준다.        
    });
}).then((input) => {        
    fs.readFile(input.split(/\s?:\s?/)[1],"utf-8",function(err,data){           
        return data;  // promise와 then 을 연결해준다.        
    });    
}).then((val)=>{    // input이 val로 들어옴
    //throw new Error("Self Error");
    console.log(val);
    console.log(`2step ${val}`);
}).catch((err)=>{   // 마지막에 catch가 한번만 있으면댐
    console.log(err.message);
});