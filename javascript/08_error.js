/* 
    비동기 함수 처리중에 에러가 발생하는 경우?
*/
try {
    setTimeout(function () {
        let obj = null;
        console.log(obj.value);
    }, 1000)
} catch (err) {
    console.log(err.message);
}
