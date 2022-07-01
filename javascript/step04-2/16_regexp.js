let diary = `아침 5:10 에 일어났더니 하루가 피곤하다.
밥을 먹고 8시5분에 회사로 출근하였다. 9:00 가 되가는데
아무도 오지 않았다. 그래서 오전내내 멍때리다 12시30분에 집에갔다.`;

//let time = diary.match(/[0-1]?\d[:시]\s?[0-5]?\d분?/g);
let time = diary.match(/\d{1,2}[:시]\s?\d{1,2}분?/g);
let rst = diary.match(/(0?\d|1[\d]|2[0-3])(:|h|hour|시)\s?[0-5]?\d분?/g);   
console.log(time);
console.log(rst);