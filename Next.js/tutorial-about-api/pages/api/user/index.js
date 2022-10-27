/*
    [post] Content-type 이 application/json으로 요처이 들어올 때
    user model을 통해서 DB에 데이터가 들어갈 수 있게 api를 구현하고

    PostMan을 통해서 실제 요청을 발생시켜서 DB에 insert되는지 확인.    
*/

import mongooseInit from "../../../lib/mongo-init";
import user from "../../../lib/models/user";
import { hash } from "bcryptjs";

export default async function (req, res) {
    mongooseInit();
    if(req.method !=="POST"){
        return res.status(405).json({message:`${req.method} is not allowed`});
    }
    const {email, password, age} =req.body;

    if(email && password && age){
        const hashedPassword = await hash(password, 12);
        const result = await user.create({email, password:hashedPassword, age, emailAuth:true});        
        return res.status(201).json({message:"true", result:result})
    }
    return res.status(500).json({message:"false"});
}
