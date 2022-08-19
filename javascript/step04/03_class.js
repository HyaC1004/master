class Rectangle {
    // 2. 이런형태 클래스 자체에 선언해둔 프로퍼티는 추가로 할수 있는 작업이있다.
    // #과 함께 선언하는게 가능. #붙인 프로퍼티는 private 처리됨.
    #x=0;
    #y;
    constructor(width,height) {
        // console.log(this.__proto__);
        // 1. {} 비어있는 객체에 프로퍼티를 추가하는 형태가 아니라
        this.width = width;
        this.height = height;
    }
    move(dx,dy) {
        this.#x = dx >= 0 ? dx : 0;
        this.#y = dy >= 0 ? dy : 0;
    }
    position() {
        return {"x": this.#x, "y": this.#y};
    }
}
const r = new Rectangle(300,300);
console.log(r);
r.move(-10,-1);
console.log(r.position());
//console.log(r.#x);

/*
    private property를 왜 만들어놨냐
    외부에서 접근 불가능하고 변경도 불가능하게 처리해준것
    의도한대로 값을 가질수 있게 설정함수를 지정할수있다.
    공개 비공개의 차이
*/