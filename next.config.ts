import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saritharao.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
