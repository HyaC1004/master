/*
https://www.mongodb.com/docs/manual/crud

qty 50이상인 데이터 find?
    {qty : { $gte : 50 }}
status가 "A"가 아닌 데이터 find
    {status : { $ne : "A" }}
item이 "paper"혹은 "planner"인 데이터 
    {item : { $in: ["paper", "planner"] }}
status가 "D"면서 qty가 70초과인 데이터
    { status: "D" ,  qty: { $gt: 70 }}



update # set을 이용해서 기존 값을 변경하나거나 추가 필드를 삭제하거나 추가 도 수정
await db.collection('inventory').updateOne(
  { item: 'paper' },
  {
    $set: { 'size.uom': 'cm', status: 'P' },
    $currentDate: { lastModified: true }
  }
);

dlete # 문서를 삭제하는 것
*/
