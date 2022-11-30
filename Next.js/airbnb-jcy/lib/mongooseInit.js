import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("Please check MONGO_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
cached = global.mongoose = { conn: null, promise: null };
}
export default async function mongooseInit() {
    if (cached.conn) {
        return cached.conn;
      }
      if (!cached.promise) {
        const opts = {
          bufferCommands: false,
          dbName: "airbnbJcy"
        };
    
        cached.promise = mongoose.connect(MONGO_URI, { dbName: "airbnbJcy" }).then((mongoose) => {
          return mongoose;
        });
      }
    
      try {
        cached.conn = await cached.promise;
      } catch (e) {
        cached.promise = null;
        throw e;
      }
    
      return cached.conn;
    }




