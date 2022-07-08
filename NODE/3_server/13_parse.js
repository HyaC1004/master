const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");
const querystring = require('querystring');

let data = "/fee?used=30";  // GET Method 형태일때 발생하는 URL
console.dir(url.parse(data,true));

let data2 = "used=30";  
console.dir(url.parse(data2,true));
console.dir(url.parse("/?"+data2,true));
console.dir(querystring.parse(data2,true));


