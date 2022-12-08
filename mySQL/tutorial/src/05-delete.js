import pool from "./utils/db-pool.js";

!async function() {
    // 데이터 삭제
    const target = "master@gmail.com"

    const sql = "delete from users where email=?";
    // master@gmail.com의 비밀번호를 qwerasdf로
    const rst = await pool.query(sql, target);
    // console.log(rst);
    if(rst[0].affectedRows===1){
        console.log({result:true});
    }else{
        console.log({result:false});
    }
    pool.end();
}();