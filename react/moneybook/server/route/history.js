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


router.get("/",async(req,resp)=>{
    const month = req.query.month;
    const parsed = month.split("-");
    const begin = new Date(parsed[0],parsed[1]-1,1,9)
    const end = new Date(parsed[0],parsed[1],1,9);
    //console.log(req.logon);
    try{
        const expends = await expend.find({
            account : req.query.logon, itemDate: {$gte:begin,$lt:end}
        }).sort("itemDate").lean();
        return resp.status(200).json({result:true, datas:expends });
    }catch(e){
        resp.status(500).send({result:false, "message":e.message});
    }    
});

router.get("/search",async(req,resp)=>{
    const begin = new Date(req.query.begin);
    const end = new Date(req.query.end);
    const category = [];
    end.setDate(end.getDate()+1);

    try{
        const expends = await expend.find({
            account : req.query.logon, itemDate: {$gte:begin,$lt:end}
        }).sort("itemDate").lean();
        return resp.status(200).json({result:true, datas:expends });
    }catch(e){
        resp.status(500).send({result:false, "message":e.message});
    }    
});

router.post("/write", async(req,resp)=>{
    // console.log(req.body);
    const account = req.logonEmail;
    
    try{
        const rst = await expend.create({...req.body,account});
        resp.status(201).json({result:true, data: rst});
    }catch(e){
        resp.status(409).json({result:false, message: e.message});
    }   
});

router.post("/update", async(req,resp)=>{
    // console.log(req.body);
    console.log(req.body.id);
    try{
        const rst = await expend.findOneAndUpdate({_id:req.body.id},{$set:{...req.body}});
        resp.status(201).json({result:true, data:rst});
    }catch(e){
        resp.status(409).json({result:false, message: e.message});
    }   
});

router.post("/delete",async(req,resp)=>{
    console.log(req.body.id);
    try{
        const rst = await expend.deleteOne({_id:req.body.id})
        return resp.status(200).json({result:true, data:rst });
    }catch(e){
        resp.status(409).json({result:false, message: e.message});
    }   
    
});

export default router;