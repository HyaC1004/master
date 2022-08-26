import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    email : {type: String, unique: true },
    password : String,
    name : String,
    gender : String,
    birth : Number
},{
    toObject:{virtuals: true}
});

accountSchema.virtual("key",{
    localField:"_id",
    ref: "expend",
    foreignField:"userId"
});


export default mongoose.model("account", accountSchema);