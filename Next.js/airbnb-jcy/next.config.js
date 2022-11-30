

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_ADDRESS: process.env.SERVER_ADDRESS,
  },
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
module.exports = nextConfig

