/*
    Map 객체는 {} 객체와 유사한 객체이다.
    키-밸류 형태로 데이터를 관리하기 위해 만들어진 객체이다.
    set(key, value)
*/
const dictionary = new Map();
dictionary.set("apple", {spell:"apple", mean:"사과", type:"n"});
dictionary.set("do", {spell:"do", mean:"하다", type:"v"});
let rst = dictionary.get("apple");
console.log(rst);
dictionary.size;

const obj = {};
    obj.apple = {spell:"apple", mean:"사과", type:"n"};
    obj.do = {spell:"do", mean:"하다", type:"v"};