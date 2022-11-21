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
  photos: [{ _id: mongoose.Types.ObjectId; extraUrl: string }];
  title: string;
  description: string;
  visibility: string;
  price: string;
  sale: boolean;
  legal: {
    cctv: boolean;
    weapon: boolean;
    beast: boolean;
  };
  receipt: Date;
  publish: Boolean;
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
  photos: [{ extraUrl: String }],
  title: String,
  description: String,
  visibility: String,
  price: String,
  sale: {type:Boolean, default:false},
  legal: {
    cctv: {type:Boolean, default:false},
    weapon: {type:Boolean, default:false},
    beast: {type:Boolean, default:false}
  },
  receipt: Date,
  publish: Boolean,
});

const Hosting: mongoose.Model<HostingData> =
  mongoose.models.Hosting || mongoose.model("Hosting", hostingSchema);

export default Hosting;
