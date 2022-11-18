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
  photos: Array<Object>;
  title: string;
  description: string;
  visibility: string;
  price: string;
  sale: boolean;
  legal: {
    cctv: boolean;
    weapon: boolean;
    beast: boolean;
  }
}
const ImageSchema = new mongoose.Schema({
  name: String,
  data: Buffer
});

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
  photos: [ImageSchema],
  title: String,
  description: String,
  visibility: String,
  price: String,
  sale: Boolean,
  legal: {
    cctv: Boolean,
    weapon: Boolean,
    beast: Boolean
  }
});

const Hosting: mongoose.Model<HostingData> =
  mongoose.models.Hosting || mongoose.model("Hosting", hostingSchema);

export default Hosting;
