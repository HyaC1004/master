import jwt from "jsonwebtoken";

const secret = "&98XM8q6udrq@tik2%V$a0p&T2o^ilN*";

// 토큰 옵션 설정하기 expiresIn(토큰 유효시간 기본 초)
const token = jwt.sign({subject: "backend"}, secret,{expiresIn:5});

setTimeout(()=>{
    const r = jwt.verify(token, secret);
    console.log(r);
},6000);