import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // In Next.js 15–16, this now uses fetch() with strict DNS rules.
    // Unsplash uses Akamai/CDN IP ranges like 198.18.x.x, which Next.js mistakenly flags as private network.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Allows any path on this hostname
      },
    ],
  },
};

export default nextConfig;
