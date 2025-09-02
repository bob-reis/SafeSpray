/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/spray', destination: '/' },
      { source: '/spray/:path*', destination: '/:path*' },
    ]
  },
}

module.exports = nextConfig
