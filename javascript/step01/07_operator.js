/*
    증감은 단위가 1씩 변화
    산술계산기호랑 대입기호가 합쳐진 형태 combined assign 연산이 있다
*/
let target = 100;

target += 30; // 원래 값에 30더해줌
console.log(`target = ${target}`);
target -= 10;
console.log(`target = ${target}`);
target *= 2;
console.log(`target = ${target}`);
target %= 7;
console.log(`target = ${target}`);
target **= 2;
console.log(`target = ${target}`);
target /= 10;
console.log(`target = ${target}`);

let degree = 5;
target += degree;

console.log(10.32%0.1);
/*
    +=는 문자열에도 적용 가능
*/
let txt = "Today is ";
txt += "2022.06.09";
txt += "(Thu)";
console.log(txt);
txt -="(Thu)"
console.log(txt); // NaN 
