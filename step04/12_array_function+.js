function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const student = [
    new Person("감혜빈",27,"남"), 
    new Person("공병구",30,"남"), 
    new Person("정상춘",29,"남"), 
    new Person("최윤주",34,"여"),
    new Person("윤형호",42),
    new Person("최현",27,"남"),
    new Person("이성훈",30,"남")    
];

// filter로 30대만 추출
let cnt = student.filter(function(val){    
    if (val.age >= 30 && val.age <40) {
        return true;       
    } else {
        return false;
    }
});
console.log(cnt);

// sort와 reverse를 이용해서 나이순 내림정렬
student.sort((a,b) => a.age-b.age);
student.reverse();
console.log(student);