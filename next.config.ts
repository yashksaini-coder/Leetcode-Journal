import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignores all ESLint warnings and errors during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Match any hostname
      },
    ],
  },
};

export default nextConfig;
