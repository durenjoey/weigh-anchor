/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'standalone',
  distDir: '.next',
  useFileSystemPublicRoutes: true
};

module.exports = nextConfig;
