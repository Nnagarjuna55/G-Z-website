import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a production build use its own folder so it never collides with a running `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: false,
  },
  webpack: (config) => {
    // Webpack's default xxhash64 hasher is a wasm module that crashes on Vercel's
    // Node 24 image ("WasmHash: Cannot read properties of undefined (reading
    // 'length')"). sha256 uses Node's native crypto and avoids wasm entirely.
    config.output = { ...config.output, hashFunction: "sha256" };
    return config;
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      { source: "/signup", destination: "/contact", permanent: true },
      { source: "/register", destination: "/contact", permanent: true },
      { source: "/case-studies", destination: "/use-cases", permanent: true },
      {
        source: "/hiring",
        destination: "/job-portal",
        permanent: true,
      },
      {
        source: "/courses",
        destination: "/ai-lms",
        permanent: true,
      },
      {
        source: "/courses/:slug",
        destination: "/ai-lms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
