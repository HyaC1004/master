const url = require("url");

let data = "id=mv02&seat=1-2";

let params = new URLSearchParams(data);
console.log(params.get("seat"));
console.log(params.getAll("seat"));
/*
let query = url.parse("/?"+data, true).query;
console.log(query);
*/