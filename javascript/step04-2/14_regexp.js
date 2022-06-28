/*  
    ()를 치는 건 그룹의 의미도 있는데 캡쳐의 의미가 있다.
    ()친 부분은 나중에뽑아서 따로 쓸수도있다.
    RegExp exec 혹은 String match로 돌렸을때 그 캡쳐된 부분을
    배열인덱스로 접근해서 그 부분만 사용가능
    (?: ) 이렇게 그룹을 잡으면 Non-capturing group
    (?<name>) : 해당이름으로 추출
*/
let ptrn = /^01(0|1|[6-9])-(?:\d{3}|\d{4})-(\d{4})$/;
ptrn = /^01(0|1|[6-9])-(?<tel1>\d{3}|\d{4})-(?<tel2>\d{4})$/;
let rst = ptrn.test("010-4614-8225");
console.log(rst);
rst = ptrn.exec("010-4614-8225");
console.log(rst);
console.log(rst.groups.tel1);
console.log(rst.groups.tel2);
console.log(rst[1]);
console.log(rst[2]);
console.log(rst[3]);
