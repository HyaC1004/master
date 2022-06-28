/*
    super라는 키워드는 원본 객체를 가리키는 값 (this는 자기자신 super는 상위)
    super 키워드는 만약 호출을 하게 되면 부모(상위)객체의 consteuctor를 호출하게 되고
        자식(하위)의 constructor에서만 사용할 수 있다.
    . 을 붙여서 사용하게 되면 부모객체의 프로퍼티를 지정해서 사용할 수 있다.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getIntroduce() {
        return `안녕하세요. 제 이름은 ${this.name}이고, ${this.age}살 입니다. `
    }
    // ..................
}
class SpecialList extends Person {
    constructor(name, age, ...hobbies) {
        super(name, age);
        this.hobbies = hobbies;
    }
    getIntroduce() {
        return super.getIntroduce() + `취미는 ${this.hobbies.join()} 입니다.`
    }
}

const a = new SpecialList("감혜빈", 27, "공부", "스터디");
console.log(a.getIntroduce());