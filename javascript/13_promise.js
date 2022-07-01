/*
    만들고자 하는 Promise
        파일의 내용을 읽어서 결과를 만들어주는 역활
*/
const fs = require("fs");

function read(target) {
    return new Promise(function (resolve, reject) {
        fs.readFile(target, "utf-8", function (err, data) {
            //console.log(data);
            resolve(data);
        });
    });
};

read("javascript/source.txt")
    .then(function (result) {
        //console.log(result);
        let newTarget = result.split(/\s?:\s?/)[1];
        return read(newTarget);
    })
    .then(function (result) {
        console.log(result);
    }).catch(function(e){
        console.log(e.message);
    });