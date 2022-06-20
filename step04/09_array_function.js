/*
    join: 배열 요소 사이사이에 구분자를 연결한 문자열 생성(디폴트가 ,)
*/
const data = ["관우", "장비", "조운", "황충", "마초"];
let r = data.join("-");
console.log(r, data);

/*
    sort: 정렬 오름차순, reverse: 요소들의 순서를 반전
    원본에 변화가 일어남
*/
data.sort();
data.reverse();
console.log(data);

const arr = [101, 32, 11, 3];
arr.sort(); // 내부 요소를 문자열화 해서 크기 비교
console.log(arr.join(" >> "));

/*
    fill: 전부 특정요소로 채우는것
    인자 설정을 통해 특정 범위의 요소들만 채우는것도 가능
*/
arr.fill(0);
console.log(arr);
/*
    flat: 평탄화, 배열 내부에 배열이 더 있으면 풀어줌
*/
const ar = [[1,2,3,4],[45,6,7,7,8]];
console.log(ar.flat());