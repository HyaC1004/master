import mongoose from "mongoose";

const expendSchema = new mongoose.Schema({
    account:String,
    itemDate: {type:Date,required:true},
    useDesc: {type: String, required: true},
    cashAmt:{type: Number, default: 0},
    cardAmt:{type: Number, default: 0},
    category:{type:String},
    tag:{type:String},
    createdAt:{type: Date, default: Date.now}
});


export default mongoose.model("expend", expendSchema);