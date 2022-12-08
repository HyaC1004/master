/*
    npx nodemon ./src/main.js
*/
import mysql from "mysql2/promise";
import pool from "./utils/db-pool.js";
//========================== createPool | DBCP(커넥션 풀) 를 사용해서 처리하겠다는. 


// let conn = pool.acquireConnection();
// conn.releases();
const sql = "insert into users(email, password, name) values('totoros@gmail.com', '1q2w3e4r', '도토로')"
await pool.query(sql);


pool.end();





