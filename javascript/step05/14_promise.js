function delayLog(txt, time) {
    return new Promise((resolve, reject) => {
        if(time<0) {            
            reject("시간을 음수로 하는건 불가능");
            // throw new Error();
        }else{
            setTimeout(()=>{
                console.log(txt);
                resolve();
            },time);   
        }     
        // 여기에 resolve 하면 값 없이 출력됨
    });
}
//=========================================
delayLog("작업시작",0)
    .then(function() {
        delayLog("1단계",1000);
    })
    .then(() => {
        return delayLog("2단계",2000);
    })
    .then(() => delayLog("작업완료",4000))
    .then(() => console.log("==================="))
    .catch((err) => console.log(err));  // Promise 작업에서 Reject를 호출하거나
                                        // 의도치 않은 Error가 발생하게 되도 catch는 작동을함
                                        
    