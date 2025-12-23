/** @type {import('next').NextConfig} */
module.exports = {
  // Remove static export for Vercel deployment
  // output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
