/*
    객체가 필요할때 만들어서 쓰는 방법을
    리터럴 방식이랑 생성자함수를 통한 방법만 살펴보고 왔는데,
    class 라는 것을 이용해서 만드는 방법을 마지막으로 보자.
*/
// 1. 리터럴
let one = {name: "감혜빈"};
// 2. 생성자함수
function Person(name) {
    this.name = name;
};
let two = new Person("정상춘");
// 3. 클래스 (객체 생성 전용 함수라고 보면됨)
class Student {
    constructor(name) {
        this.name = name;
    }
}
//console.log(typeof Student);
let three = new Student("최윤주");

// console.log(one,two,three);
// console.log(JSON.stringify(one));
// console.log(JSON.stringify(two));
// console.log(JSON.stringify(three));


