const mongoose = require("mongoose");

const expendSchema = new mongoose.Schema({
    userId:{type:mongoose.SchemaTypes.ObjectId, ref:"account",required:true},
    date: {type: Date},
    dateString: String,
    purpose: {type: String, required: true},
    pay: {type: String, required:true},
    price:Number,
    category:{type:String},
    tag:{type:String},
    createdAt:{type: Date, default: Date.now}
});


module.exports = mongoose.model("expend",expendSchema);