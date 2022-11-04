import mongoose from "mongoose";
import { AccountData } from "../../interface/account";

const accountSchema = new mongoose.Schema<AccountData>({
    email: {type: String, required: true },
    password: {type: String, required: true }, // bycript
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    birth: {type: String, required: true },
    auth: Boolean,
    marketing: Boolean,
    marketingDate: Date,
    accountStatus: Boolean
});

export default (mongoose.models.Account as mongoose.Model<AccountData>) ||
  mongoose.model<AccountData>("Account", accountSchema);
