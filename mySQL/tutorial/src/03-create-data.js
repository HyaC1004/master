import { faker } from "@faker-js/faker";
import pool from "./utils/db-pool.js";

!async function() {
    // Create 작업을 변수를 이용해서 
    const data = { email:"master1@gmail.com", password:"1234", name:"마슷허"};

    // 1번째 변수를 이용해서 명령문을 만듬
    // const sql = `insert into users(email, password, name) values("${data.email}","${data.password}","${data.name}")`;
    // const rst = await pool.query(sql);
    // console.log(rst);

    // 2번째: 프리페어스테이트먼트 방식으로
    // const sql = "insert into users(email, password, name) values(?, ?, ?, ?)";
    // const rst = await pool.query(sql, [data.email, data.password, data.name, new Date()]);
    // console.log(rst[0].affectedRows);

    // 3번째: 이 라이브러리에서 제공하는 특이한 sql을 사용
    // const sql = "inset into users set ?";
    // const rst = await pool.query(sql, data);
    // console.log(rst);

    // for (let cnt = 1; cnt <= 100; cnt++) {
    //     faker.setLocale("ko");
    //     const name = faker.name.lastName() + faker.name.firstName();
    //     faker.setLocale("en");
    //     const email = faker.internet.email().toLowerCase();

    //     const sql = "insert into users(email, password, name) values(?, ?, ?)";
    //     const rst = await pool.query(sql, [email, "1q2w3e4r", name]);
    //     console.log(rst[0].affectedRows);
    // }

    pool.end();
}();