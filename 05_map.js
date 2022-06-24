/*
    데이터 키-밸류 형태로 관리 [키,밸류]
*/
new Map();  // empty 상태의 map
// 배열을 통해 미리 데이터를 설정해둘수 있는데,
// 값은 배열로 [키,값]
let map = new Map([["apple","사과"],["grape","포도"]]); // 들어가야되는게 배열이어야댐
console.log(map, map.size);
map.set("apple","능금");    // 같은키로 데이터를 집어넣으면 변경
console.log(map, map.size);
// 요소 취득 get(키) 없을 때는 undefined
console.log(map.get("can"));

// has(키) ===> boolean
console.log(map.has("능금"));
console.log(map.has("apple"));

// delete(키) ===> boolean
map.delete("help");

// 일괄 삭제 clear() 


map.set("QnA","/qna/index.ejs");
map.set("aricle","/article/list.ejs");
//전체 데이터 순회
map.forEach(function(val, key, map) {    
    if(val == "능금") {
        map.delete(key);
    }
    console.log(`${key} ==> ${val}`);
});
console.log(map);
//========================================
// WeakMap, WeakSet도 있다. Map, Set과 funciotn은 같고, 기능도 같음
