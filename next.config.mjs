/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    // Deployment images are uploaded through the outreach engine's admin and stored in
    // GCS, not /public - next/image rejects any host that isn't explicitly allowed here.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/nuveroai-deployment-images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(workflows|demos|brand)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    // /demos was folded into /work (each deployment now shows its own demo).
    return [{ source: '/demos', destination: '/work', permanent: true }];
  },
};

export default nextConfig;
