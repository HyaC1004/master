/*
    생성자함수로 정의내린 방식과 차이점?
    1. new 없이 호출이 안됨.
    2. 객체 초기화 관련된 작업은 constructor 안에 설계해야함.
        - constructor는 한개만 가질수 있다.
    3. class 안에 축약형 함수는 전부 프로토타입으로 등록이 됨.  
*/
class StopWatch {
    constructor() {
        this.minute = 0;
        this.second = 0;
    }
    // 프로토타입메서드
    elapsed(sec) {
        this.second += sec;
    }
    // 정적 메서드
    static isValid(min, sec) {
        return min >= 0 && sec > 0 && sec < 60;
    }
}
const s1 = new StopWatch();
const s2 = new StopWatch();
console.log(s1.elapsed === s2.elapsed);

s1.elapsed(30);
s1.isValid(40, 29);

StopWatch.isValid(30, 20);

/*
    StopWatch.prototype.elapsed= function(...) {};
    StopWatch.isValid = function(...) {};
*/
