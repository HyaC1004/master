const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    title: String,
    owner: String,
    joiner: {type:[String], default:[]},
    type: String,
    password: String,
    createdAt: {type:Date, default: Date.now}
});


module.exports = mongoose.model("room",roomSchema);