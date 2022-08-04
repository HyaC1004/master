const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    roomId:{type:mongoose.SchemaTypes.ObjectId, ref:"room", required:true},
    talker: {type: String, required: true},
    content: String,
    data: {type: String, required: true},
    author: {type: [String], required: true},
    read: {type:[String],default:[]},
    createdAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model("message",messageSchema);