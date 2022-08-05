

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    title: String,
    owner: String,
    joiner: { type: [String], default: [] },
    type: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
},{
    toObject:{virtuals: true}
});

roomSchema.virtual("key",{
    localField:"_id",
    ref: "message",
    foreignField:"roomId"
});


module.exports = mongoose.model("room", roomSchema);