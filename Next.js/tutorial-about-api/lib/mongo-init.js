import mongoose from "mongoose";


export default function mongooseInit(){
    const MONGO_URI = process.env.MONGO_URI;
    if(!MONGO_URI) {
        throw new Error("Please check MONGO_URI in .env.local");
    }
    
    if(!global.mongooseInit){
        mongoose.connect(MONGO_URI,{dbName: "next-tutorial"})
            .then((value)=>{
                global.mongooseInit=true;
                console.log("success to connect Mongo");
            })
            .catch((err)=>console.log("err: ",err.message));
        
    }
}
