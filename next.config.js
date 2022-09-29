/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
};

module.exports = nextConfig;
