/*
    npx nodemon ./src/main.js
*/
import mysql from "mysql";

const connection = mysql.createConnection({
    host: 'database2.c8ksfpr5aypt.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    password: 'hyac1107',
    database: 'tutorial',
});
connection.connect((err, args) => {
    if (err) {
        console.log("connect failed..!" + err);
    }
    console.log("connected.!");
});
// C,R,U,D
const sql = "insert into users(email, password, name) values('administartor@gmail.com', '1q2w3e4r', '관리자')"
connection.query(sql, (err, result) => {
    if (err) {
        console.log("query failed..", err);
    } else {
        console.log("query Success..", result);
    }
});

connection.end();





