/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/", permanent: true },
      { source: "/get-support", destination: "/support", permanent: true },
    ]
  },
}

export default nextConfig
