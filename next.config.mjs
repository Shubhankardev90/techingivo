// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true,  // Enable CSS modules
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:5]",
  },
};

export default nextConfig;
