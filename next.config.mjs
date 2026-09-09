/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
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
  async redirects() {
    // /demos was folded into /work (each deployment now shows its own demo).
    return [{ source: '/demos', destination: '/work', permanent: true }];
  },
};

export default nextConfig;
