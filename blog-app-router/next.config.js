/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['images.microcms-assets.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/xxxxxxxxxx/**',
      },
    ],
  },
}

module.exports = nextConfig
