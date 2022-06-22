// # splice: 데이터를 추가하거나 삭제할때 모두 사용가능
const data = ["감혜빈","공병구","정상춘","최윤주","최현"];
//delete data[3]; // 칸은 남아있다.
//매개변수가 2개 이상은 들어가야한다.(조작할 inedex, 지울 개수, +추가할 데이터값)
data.splice(3,0,"유유유","이혜주");
console.log(data);

let rst = data.splice(2,1); //작업의 결과물은 지워진 값들을 배열로
console.log(rst);
console.log(data);

// slice: 자르다. (일부를 잘라내서 새로운 배열을 반환 둘다 index로 사용됨, 원본의 변화는 없다.)
let rstt = data.slice(2,4);
console.log(rstt);
console.log(data);