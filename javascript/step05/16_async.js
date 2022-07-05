
const fs = require("fs");

function read(target) {
    return new Promise(function (resolve, reject) {
        fs.readFile(target, "utf-8", function (err, data) {            
            resolve(data);
        });
    });
};
async function start(src) {
    // async 안에 동기함수 처럼 try, catch를 해주면된다.
    try{
        let rst = await read(src);    
        let data = await read(rst.split(/\s?:\s?/)[1]);    
        return data;
    } catch(err) {
        console.log(err.message);
    }
    
}

start().then((rst) => {
    console.log(rst);
});

