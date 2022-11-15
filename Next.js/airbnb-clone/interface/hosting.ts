import mongoose from "mongoose";

export interface HostingData {
    _id: mongoose.Types.ObjectId;
    email: string;
    group: string;    
    property: string;
    privacy: string;
    location?: string;
    image?: string;
}