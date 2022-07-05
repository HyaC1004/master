/* 
    에러는 프로그램이 가동중에 예기치않게 발생하게되는데 ,
    이걸 의도적으로 일으킬수도 있다.

*/

const r = new Error("그냥 기분이 좀 나쁨.");
try {
    if (Math.random() > 0.5) {
        throw r;
    }
} catch (err) {
    console.log(err.message);
}
