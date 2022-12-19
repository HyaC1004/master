const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    author: String,
    content: String,
    timestamp: Date,
})
const relationshipSchema = new mongoose.Schema({
    owner: String,
    opponent: String,
    created_at: Date,
    accepted_at: Date,
    messages: [messageSchema]
});


module.exports = mongoose.model("relationship", relationshipSchema);