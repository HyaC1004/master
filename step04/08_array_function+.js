/*
    function설계시  매개변수 부분에 rest parameter를 설정할수 있다.
    ... => 매개변수를 배열로 받을 수 있다.
    맨 마지막에만 가능
*/
// function err(...args, m){ err 뜸 }
function test(num, ...params) {
    console.log(num); // num빼고 나머지는 배열로 들어옴
    console.log(Array.isArray(params),params)
}
test(3,4,5,6);