const { default: mongoose } = require('mongoose');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.animal.go.kr'],
  },
}

module.exports = () => {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose.connect(MONGO_URI, { dbName: "tutorial-demo" })
    .then(() => console.log("mongoose Initialized"));

  return nextConfig;

}
