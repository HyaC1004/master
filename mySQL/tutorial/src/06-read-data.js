import pool from "./utils/db-pool.js";

!async function() {
    // 이름 검색 like
    const searchKeyword = "호";
    const sql = "select * from users where name like ? order by name"
    const rst = await pool.query(sql, `%${searchKeyword}%`);
    console.log(rst[0]);


    // // email 사용가능한지 확인하는 api
    // const target = "vella88@hotmail.com";
    // const sql = "select * from users where email=?";
    // const rst = await pool.query(sql, target);
    
    

    // const sql = "select * from users order by name limit 10";
    // const rst = await pool.query(sql);
    // // console.log(rst[0]);
    // for( let one of rst[0]) {
    //     console.log(one.email, JSON.stringify(one));
    // }

    pool.end();
}();