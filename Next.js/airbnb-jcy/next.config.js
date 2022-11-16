const { default: mongoose } = require('mongoose');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['maps.googleapis.com'],
  },
  rewrites: async () => {
    return [{
      source: "/google/autocomplete",
      destination: "https://maps.googleapis.com/maps/api/place/autocomplete/json"
    },
    {
      source: "/google/details",
      destination: "https://maps.googleapis.com/maps/api/place/details/json"

    }]
  }
}

module.exports = () => {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose.connect(MONGO_URI, { dbName: "airbnbJcy" })
    .then(() => console.log("server - mongoose initialized"))
    .catch(() => {
      console.log("Error - moongose connect failed");
      process.exit(-1);
    }
    );

  return nextConfig;
}

