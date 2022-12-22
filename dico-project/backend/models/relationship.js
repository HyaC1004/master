const mongoose = require("mongoose");

const relationshipSchema = new mongoose.Schema({
    owner: String,
    opponent: String,
    created_at: Date,
    accepted_at: Date,
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

relationshipSchema.virtual("ownerDetail", {
    ref: "user",
    justOne: true,
    localField: "owner",
    foreignField: "email",
});

relationshipSchema.virtual("opponentDetail", {
    ref: "user",
    justOne: true,
    localField: "opponent",
    foreignField: "email"
});

module.exports = mongoose.model("relationship", relationshipSchema);