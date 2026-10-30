import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  basePath: "/Lalahouse", // Matches your GitHub repo name
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;