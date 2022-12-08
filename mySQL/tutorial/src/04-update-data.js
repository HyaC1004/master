import { faker } from "@faker-js/faker";
import pool from "./utils/db-pool.js";

!async function() {
    // 비밀번호 수정
    const body = {
        email:"master@gmail.com",
        currentPassword:"qwerasdf",
        newPassword:"1q2w3e4r"
    }

    const sql = "update users set password=? where email=? and password=?";
    // master@gmail.com의 비밀번호를 qwerasdf로
    const rst = await pool.query(sql, [body.newPassword, body.email, body.currentPassword]);
    // console.log(rst);
    if(rst[0].affectedRows===1){
        console.log({result:true});
    }else{
        console.log({result:false});
    }
    pool.end();
}();