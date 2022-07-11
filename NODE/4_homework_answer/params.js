const url = require("url");

let data="id=mv02&seat=1-2&seat=3-2";

let params = new URLSearchParams(data);
console.log(params.get("seat"));    // string
console.log(params.getAll("seat")); // 배열로



/* 
    값이 하나일때 배열이아닌 스트링으로 나오는 단점이있음
    let query = url.parse("/?"+data, true).query;
    console.log(query);
 */