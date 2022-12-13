const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req,res)=>{
    console.log(req.body);
    try {
        // const one = await Users.findOne({email: req.body.email});
        const one = {email: "master@gmail.com", name: "master"};
        const isEqual = bcrypt.compareSync(req.body.password,
            "$3454354#%#$543543");
        if(!isEqual){
            return res.status(500).json({});
        }
        const token = jwt.sign(one, "secretKey", {expiresIn:"7d"})
        console.log(token);
    } catch(e) {
        console.log(e);
        res.status(500).json({});
    }

})

router.post("/register", (req, res)=>{
    // console.log(req.body);
    // password 만 
    const hashedPW = bcrypt.hashSync(req.body.password, 12);
    console.log(req.body.password, hashedPW);
    return res.status(200).json({});
})



module.exports = router;