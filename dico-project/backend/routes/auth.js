const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

router.post("/register", async(req, res)=>{
    const {email, password, name} = req.body;
    const hashedPW = bcrypt.hashSync(req.body.password, 12);    
    try{
        let rst = await User.create({email:email,name:name, password: hashedPW, authed:false});
        res.status(200).json({result:true, message: rst});
    }catch(e){
        res.status(500).json({result:false, message: e.message});
    } 
})

router.post("/login", async(req,res)=>{
    const {email, password, name} = req.body;
    try {
        const one = await User.findOne({email: email});
        if(one && bcrypt.compareSync(password, one.password)){
            const token = jwt.sign({user:{email:one.email, name: one.name}},
                process.env.SECRET_KEY,{expiresIn: "7d"});
            console.log(token);
            res.status(200).json({token:token, result: true});
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({});
    }

})





module.exports = router;