import mongoose from "mongoose";

const expendSchema = new mongoose.Schema({
    userId:{type:mongoose.SchemaTypes.ObjectId, ref:"account",required:true},
    date: String,
    purpose: {type: String, required: true},
    cashAmt:String,
    cardAmt:String,
    category:{type:String},
    tag:{type:String},
    createdAt:{type: Date, default: Date.now}
});


export default mongoose.model("expend", expendSchema);