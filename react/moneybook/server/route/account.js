import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import account from "../model/account.js";

dotenv.config();

const router = express.Router();

router.post("/register", async(req, resp)=>{
    const pw = await bcrypt.hash(req.body.password,10);
    try{
        let rst = await account.create({...req.body, password: pw});
        resp.status(201).json({result:true, message: rst});
    }catch(e){
        resp.status(409).json({result:false, message: e.message});
    }   
});

router.post("/auth", async(req, resp)=>{
    try{
        let rst = await account.findOne({email:req.body.email});
        const check = await bcrypt.compare(req.body.password,rst.password);
        if(rst && check){
            const token = jwt.sign({email: rst.email}, process.env.SECRET_KEY,{expiresIn:60*60*12 });
            resp.status(200).json({result:true, message: rst, token});
        }else{
            throw new Error("invalid email / password")
        }
    }catch(e){
        resp.status(401).json({result:false, message : e.message});
    }
    
    
});






export default router;