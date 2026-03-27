import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webdemo.cyrusrecharge.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;