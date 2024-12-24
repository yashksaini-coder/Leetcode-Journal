import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignores all ESLint warnings and errors during builds
  },
};

export default nextConfig;
