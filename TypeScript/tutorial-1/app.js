"use strict";
/*
   typescript 는 overload 를 지원한다.
    - 과적 / 같은이름의 함수 혹은 생성자 를 여러개 정의내리는 걸 오버로드
*/
{
    function combine(one, two, three) {
        if (typeof one === "number" && typeof two === "number") {
            return one + two;
        }
        else {
            return one.toString() + "," + two.toString();
        }
    }
    //==========================================
    let ret = combine("aa", "bbb");
    let ret2 = combine(1, 2);
}
