import mongooseInit from "../../../lib/mongo-init";
import user from "../../../lib/models/user";
import { compareSync, hash } from "bcryptjs";
import { unstable_getServerSession } from "next-auth";
import { option } from "../auth/[...nextauth]";

export default async (req,res)=> {
    const session = await unstable_getServerSession(req, res, option)
    const {currentPw, changePw} = req.body;
    console.log(currentPw,changePw);
    if(!session){
        return res.status(401).json({"message":"nonAuthorization"});
    }
    const data = await user.findOne({ email: session.user.email });
    if(!compareSync(currentPw,data.password)){
        return res.status(422).json({ "message": "password not matched" });
    }
    if(currentPw && changePw && (changePw!==currentPw)){
        const hashedPassword = await hash(changePw, 12);
        const result = await user.findOneAndUpdate({email:session.user.email},{$set:{password:hashedPassword}});        
        return res.status(201).json({message:"true", result:result})
    }

    res.status(200).json({message:"success"});
}