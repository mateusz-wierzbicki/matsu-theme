/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['matsu-theme.vercel.app'],
  },
};

module.exports = nextConfig; 