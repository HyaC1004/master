import mongoose from "mongoose";

export interface HostingData {
  _id: mongoose.Types.ObjectId;
  owner: string;
  propertyGroup: string;
  property: string;
  privacy: string;
}

const hostingSchema = new mongoose.Schema<HostingData>({
  owner: String,
  propertyGroup: String,
  property: String,
  privacy: String,
});

const Hosting: mongoose.Model<HostingData> =
  mongoose.models.Hosting || mongoose.model("Hosting", hostingSchema);

export default Hosting;
