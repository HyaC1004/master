import mongoose from "mongoose";
import { HostingData } from "../../interface/hosting";


const hostingSchema = new mongoose.Schema<HostingData>({
    email: String,
    group: String,
    property: String,
    privacy: String,
    location: String,
    image: String
});

export default (mongoose.models.Hosting as mongoose.Model<HostingData>) ||
  mongoose.model<HostingData>("Hosting", hostingSchema);
