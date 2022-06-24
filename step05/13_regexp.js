/*
    갯수에 관련된 패턴
    {n}     : n개
    {n,m}   : n~m개
    {n,}    : n개 이상
*/
console.log(/^\d{3}$/.test("010"));   // ^$ 정확하게 맞는지 확인할때 자주씀
console.log(/^\d{3,4}$/.test("010"));
console.log(/^\d{3,4}$/.test("0120"));
console.log(/^\d{3,}$/.test("1000000000120"));   //{3, }  <- 공백주면안댐
/*
    ?: {0,1}
    +: {1,}
    *: {0,} 패턴반복
*/
const pattern = /^https?:/;   // ?바로 앞에있는것에 영향을줌 s가 있을수도있고 없을수도있다
console.log(pattern.test("http://www.naver.com"));  // true
console.log(pattern.test("https://www.naver.com")); // true
//const kor = /^[가-힣]+$/;   // +는 1개이상의 한글로 다 채워져있는지
const kor = /^[가-힣]*$/;
console.log(kor.test(""));  // true
console.log(kor.test("유유유"));
console.log(kor.test("이 솔")); // 중간 공백이 가-힣이 아님   /^[가-힣]+/ 한글 1개이상으로 시작하냐
//=======================================================
console.log(/^[A-Z].?$/.test("A")); // A-Z로 시작해서 한글자나 두글자문자 3글자x
console.log(/^[A-Z].*?$/.test("A")); // A-Z로 시작해서 한글자 이상문자
console.log(/^[A-Z].+?$/.test("A")); // A-Z로 시작해서 두글자 이상문자
// 패턴은 ()로 group을 잡을수 있다.
console.log("==============");
const chk= /^\w+(@\w+\.\w+)?$/;   // (@단어.단어)가 있어도 되고 없어도된다.
console.log(chk.test("saan"));
console.log(chk.test("saan@naver"));
console.log(chk.test("saan@naver.com"));
console.log(chk.test("saan@microsoft.co.kr"));

//console.log("saan@naver.com".match(chk).groups.id);

// | or
console.log(/^([Nn]ew|[Oo]ld)\s+\w+$/.test("new student"));
console.log(/^([Nn]ew|[Oo]ld)\s+\w+$/.test("New   student"));

