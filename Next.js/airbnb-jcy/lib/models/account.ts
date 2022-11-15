import mongoose, { Schema, model, connect } from "mongoose";
import AccountData from "../../interfaces/account";

const accountSchema = new Schema<AccountData>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dob: { type: String, required: true },
  promotion: Date,
  status: Date,
  provider: { type: String },
  providerAccountId: { type: String },
});

const Account: mongoose.Model<AccountData> =
  mongoose.models.Account ||
  mongoose.model<AccountData>("Account", accountSchema);

export default Account;
