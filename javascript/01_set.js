/*
    Set 객체 (집합)
    - 배열과 유사한 객체이지만 중복값 저장안하고, 요소 인덱스가 없음.
*/
/*
    접속자 IP를 저장해서 통계를 낸다거나...
*/
const user = [];
    user.push("192.168.4.22");
    user.push("192.168.4.21");
    user.push("192.168.4.22");
    user.push("192.168.4.13");
    user.push("192.168.4.71");
    //.......
    const unique = [];
    user.forEach(function(ip) {
        if(!unique.includes(ip)) {
            unique.push(ip);
        }
    });
    console.log(unique.length);
    let s = new Set(user);  //
    console.log(s);
    s.add("192.168.4.22");
    console.log(s);