/*
    최대공약수를 찾아주는 function을 정의하고 테스트해보자.

    findGCD란 이름으로 매개변수는 값이 2개 들어왓을때 정상작동하면 됨
        // 1개만 들어오면 그 숫자의 최대약수를 찾아주기
*/
let findGCD = function (n1, n2) {
    let start = n1 < n2 ? n1 : n2;    
    let gcd, val;
    if (n2 === undefined) {
        for (val = n1-1; val > 0; val--) {
            if (n1 % val === 0) {
                gcd = val;
                break;
            }
        }
    } else {
        for (val = start; val > 0; val--) {
            if (n1 % val === 0 && n2 % val === 0) {
                gcd = val;
                break;
            }
        }
    }
    return gcd;
};
console.log(findGCD(24));
let t = findGCD(24, 18);
console.log(t);
