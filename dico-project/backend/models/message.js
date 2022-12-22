const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    channel: String,
    author: String,
    content: String,
    timestamp: Date,
});


module.exports = mongoose.model("message", messageSchema);