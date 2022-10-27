import mongooseInit from "../../../lib/mongo-init";
import comment from "../../../lib/models/comment";

export default async function (req, res) {
    mongooseInit();
    if(req.method !=="POST"){
        return res.status(405).json({message:`${req.method} is not allowed`});
    }
    const {email, commentText} =req.body;

    if(email && commentText){
        const result = await comment.create({email, comment: commentText});        
        return res.status(201).json({message:"true", result:result})
    }
    return res.status(500).json({message:"false"});    
}

