/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This doesn't solve issues, just ignores them
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 