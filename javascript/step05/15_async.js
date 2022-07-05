/*
    async / await (ES8)
        Promise를 조금 편하게 쓸 수 있게 도입된 문법
    async 함수 안에서는 await 함수를 쓸수 있다.

*/
async function todo() { 
    // await 키워드로 호출되는 작업이 Promise라면, 완료되기를 기다렸다가 
    // resolve되는 값을 반환
    let val = await Math.random();
    console.log(val);
    return {id: "wjdtkdcns", name: "정상춘"};
    // 작업하고 return 시키면 promise의 resolve형태가 된다.
    /*
        return new Promise((resolve, reject) =>{
            resolve({id:"wjdtkdcns", name: "정상춘"});
        })
    */
}

todo().then((rst)=>{
    console.log(rst.id, rst.name);
});

// let t = todo();
// console.log(t);