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
let f = student.findIndex((obj) => obj.age===30);
console.log(f);

// filter로 30대만 추출
//let ans = student.filter((val) => val?.age - val?.age%10 === 30);
let ans = student.filter(function(val,idx,arr) {
    //console.log(arr === student);
    return val?.age - val?.age%10 === 30;
});
console.log(ans);

// sort와 reverse를 이용해서 나이순 내림정렬
let anss = student.sort(function(one, other){
    if(one?.age !== other?.age) {
        return one?.age - other?.age;
    } else {
        return one?.name.localeCompare(other?.name);
    }
});
console.log(anss);

student.sort((a,b) => a.age-b.age);
student.reverse();
console.log(student);