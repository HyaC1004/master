import mongoose from "mongoose";
import { HostingData } from "../../interface/hosting";


const hostingSchema = new mongoose.Schema<HostingData>({
    // email: {type: String, required: true },
    group: {type: String, required: true },
    property: String,
    privacy: String,
    location: String,
    image: String
});

export default (mongoose.models.Hosting as mongoose.Model<HostingData>) ||
  mongoose.model<HostingData>("Hosting", hostingSchema);
