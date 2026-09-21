import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a production build use its own folder so it never collides with a running `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
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
