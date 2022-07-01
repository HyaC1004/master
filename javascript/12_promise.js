function create(){
    return new Promise((resolve, reject)=>{
        console.log("executed");
        let val = Math.floor(Math.random()*100);
        resolve(val);
    });
}
//========================================
create().then(function(data){
    console.log(data);
    // then의 리턴값은 Promise, 일반 value를 리턴시키면 resolve 가 됐다고 판단하고
    // Promise를 만들어서 리턴해도 됨.
    // return data;
     return create();
}).then(function(recv){
    console.log(recv);
});


/* const p = create();
console.log(p);
let rst = create().then(function(data){
    console.log("data",data);
    return "RESULT";    // 진행중인 promise의 resolve를 사용하면서 리턴값이 전달됨
    // resolve(result);
}).then(function(data){
    console.log("data2",data);
});
console.log(`rst= ${rst}`); */
