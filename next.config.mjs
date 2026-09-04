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
};

export default nextConfig;
