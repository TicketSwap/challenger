/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.ticketswap.com",
      },
    ],
  },
}

export default nextConfig
