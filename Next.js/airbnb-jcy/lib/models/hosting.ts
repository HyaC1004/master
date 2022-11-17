import mongoose from "mongoose";

export interface HostingData {
  _id: mongoose.Types.ObjectId;
  owner: string;
  propertyGroup: string;
  property: string;
  privacy: string;
  location: {
    state: string;
    city: string;
    street: string;
    apt: string;
    zipCode: string;
    lat: number;
    lng: number;
  };
  floorPlan: {
    guests: number;
    beds: number; 
    bedrooms: number;
    bathrooms: number;
  };
  facilities: Array<String>;
  safeItems: Array<String>;
  title: string;
  description: string;
}

const hostingSchema = new mongoose.Schema<HostingData>({
  owner: String,
  propertyGroup: String,
  property: String,
  privacy: String,
  location: {
    state: String,
    city: String,
    street: String,
    apt: String,
    zipCode: String,
    lat: Number,
    lng: Number,
  },
  floorPlan: {
    guests: Number,
    beds: Number, 
    bedrooms: Number,
    bathrooms: Number
  },
  facilities: Array,
  safeItems: Array,
  title: String,
  description: String
});

const Hosting: mongoose.Model<HostingData> =
  mongoose.models.Hosting || mongoose.model("Hosting", hostingSchema);

export default Hosting;
