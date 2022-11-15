import mongoose from "mongoose";
export interface PropertyData {
  group: string;
  image: string;
  types: Array<{ property: string; description: string }>;
}

const propertySchema = new mongoose.Schema<PropertyData>({
  group: String,
  image: String,
  types: [{ property: String, description: String }],
});

const Property: mongoose.Model<PropertyData> =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
