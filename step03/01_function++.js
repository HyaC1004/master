/* 두개를 합쳐서 사용하면 안댐 앞에거만작동
let give = function take(target) {
    console.log(`target = ${target}`);
};*/
// take("apple"); 코드오류
 
function take(target) {
    console.log(`target = ${target}`);
}
let give = take();
give("apple");
