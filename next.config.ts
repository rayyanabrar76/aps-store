import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Pin the turbopack root so Next doesn't wander up and pick a different lockfile.
  experimental: {
    // Next.js does not support a `turbopack` property under `experimental` in the config type,
    // so use the supported `turbopackConfig` top-level field if needed.
    // If this is necessary, add custom logic here; otherwise, remove to fix the type error.
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
