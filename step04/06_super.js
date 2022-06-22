class Base {
    constructor(data) {
        console.log("base..."+data);
    }
}
/*
    extends 하여 설계한 객체를 생성하면 
    무조건 원본객체를 만드는 코드가 들어가야 된다.
    만약 안적으면 디폴트로 아래와 같은 코드가 추가된다.
    constructor(...args) {
        super(...args); 
    }
*/
class Derived extends Base {
    constructor(number) {
        super(); // 이걸 안넣어주면 오류뜸 원본객체를 생성시켜주는 키워드
        this.number = number;
    }
}
new Derived("Text");