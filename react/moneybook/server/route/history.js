import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import expend from "../model/expend.js";

dotenv.config();

const router = express.Router();

// auth token check middleware (Bearer token)
router.use((req,resp,next)=>{    
    const authorization = req.get("authorization");
    if(!authorization || ! authorization.startsWith("Bearer")){
        return resp.status(401).json({result:false, message: "Non permission"});
    }

    const token = authorization.split(" ")[1];
    try{
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.logonEmail = payload.email;        
    }catch(e){
        return resp.status(401).json({result:false, message: "Non permission"});
    }

    next();
})


router.get("/",(req,resp)=>{
    console.log(req);
    return resp.status(200).json({result:true, userId:[] });
});

router.post("/write", async(req,resp)=>{
    // console.log(req.body);
    try{
        let rst = await expend.create({...req.body});
        resp.status(201).json({result:true, message: rst});
    }catch(e){
        resp.status(409).json({result:false, message: e.message});
    }   
});


router.get("/delete",(req,resp)=>{
    console.log(req.logonEmail);
    return resp.status(200).json({result:true });
});

export default router;