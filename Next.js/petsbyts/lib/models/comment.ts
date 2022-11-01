import mongoose from "mongoose";
import { Comment } from "../../interface";

const commentSchema = new mongoose.Schema<Comment>({
    writer: String,
    content: String,
    writeAt: Date.now()
});

export default (mongoose.models.Comment as mongoose.Model<Comment>) ||
mongoose.model<Comment>("Comment", commentSchema);