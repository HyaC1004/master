

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    roomId: { type: mongoose.SchemaTypes.ObjectId, ref : "room" , required : true},
    talker : {type : String, required : true},
    data : {type : String, required : true},
    content : String,
    createdAt : {type: Date, default : Date.now },
    readable : [String],
    unread : [String]
});

module.exports = mongoose.model("message", messageSchema)