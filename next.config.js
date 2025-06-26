/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: 'standalone',
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
