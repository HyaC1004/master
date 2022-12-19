const mongoose = require("mongoose");

const relationshipSchema = new mongoose.Schema({
    owner: String,
    opponent: String,
    created_at: Date,
    accepted_at: Date
});


module.exports = mongoose.model("relationship", relationshipSchema);