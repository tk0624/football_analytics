// next.config.js
const repo = 'football_analytics';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: isProd ? 'docs' : '.next',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;