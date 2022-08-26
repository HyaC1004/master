import jwt from "jsonwebtoken";

const secret = "&98XM8q6udrq@tik2%V$a0p&T2o^ilN*";
const w_secret = "&98XM8q6udrq@tik2%V$a0p&T2o^ilN*";
const token = jwt.sign({subject:"backend",title:"jwt" },secret);

console.log(token);

// 토큰 복원
const result = jwt.verify(token, secret);

console.log(result);


