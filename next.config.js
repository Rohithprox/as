/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', '192.168.1.5'],
    unoptimized: true,
  },
  // Development server configuration
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: '192.168.1.5:3000',
            },
          ],
          destination: '/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 