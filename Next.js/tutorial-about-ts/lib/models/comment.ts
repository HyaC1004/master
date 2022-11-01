import mongoose from "mongoose";
import CommentData from "../../interfaces/comment";

const commentSchema = new mongoose.Schema<CommentData>({
    writer: String,
    content: String,
    writeAt: Date.now()
});

export default (mongoose.models.Comment as mongoose.Model<CommentData>) ||
mongoose.model<CommentData>("Comment", commentSchema);