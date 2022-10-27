import mongoose from "mongoose";
console.log("      - ", mongoose.models);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    age: Number,
    emailAuth: Boolean
})
export default mongoose.models.user || mongoose.model("user",userSchema);