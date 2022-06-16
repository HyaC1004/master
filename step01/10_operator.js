/*
    - 3항 연산
        컨디션 ? (참값) : (거짓값)
*/
let age = 17;
console.log(age >= 19 ? "성인" : "미성년자");

/*
    - null 병합
        변수 ?? (값)
        변수 값이 비어있으면 뒤에 값을 대신 넣어줌
*/
let data = "ES6";
console.log(data ?? "ECMAScript6")

let data2;
console.log(data2 ?? "ECMAScript6");
console.log(data2 ?? "ES6");


/*
    - 옵셔널 체이닝
        변수?.(값)  //객체 배우고 살펴보자
*/