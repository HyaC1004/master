const datas = ["saan", "8king", "Thief", "Master-2"];

datas.forEach(function (one) {
    // console.log(one, /^[A-Za-z]/.test(one));
    console.log(one, /^\w/.test(one));
});
const price = ["1,000", "42,000"];
price.forEach((p) => console.log(/^[\d,]{4,}/.test(p), p)); // []로 시작해서 {n,} n개이상 연속인지

/*
    패턴 단축
    [A-Za-z0-9_] ==> \w 의 반대 -> \W = [^\w]
    [0-9] ==> \d 의 반대 -> \D = [^\d]
    [가-힣]
    [^~] => NOT 대괄호 안에 캐럿, ~를 제외한
*/
console.log(/^[^A-Z]/.test("Thief"));
/*
    [] 특정문자집합을 표기
    . 아무문자(공백도 가능)
*/
console.log(/^\w..$/.test("c ?"));