import mysql from "mysql2/promise";
//========================== createPool | DBCP(커넥션 풀) 를 사용해서 처리하겠다는. 
const pool = mysql.createPool({
    host: 'database2.c8ksfpr5aypt.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    password: 'hyac1107',
    database: 'tutorial',
});

export default pool;
