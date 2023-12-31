/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.googleusercontent.com',
        },
      ],
    },
     eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.html$/,
        use: 'html-loader',
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  
