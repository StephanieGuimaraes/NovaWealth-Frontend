/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
    buildActivityPosition: 'bottom-right',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // adicione hosts de CDN/Cloudinary em produção
    ],
  },
};

module.exports = nextConfig;
