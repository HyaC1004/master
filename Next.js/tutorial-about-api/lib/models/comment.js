import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    email: String,
    comment: String,
    createdAt: {type: Date, default: Date.now},
    emailAuth: Boolean
})
export default mongoose.models.comment || mongoose.model("comment",commentSchema);