// next.config.js
const repo = 'football_analytics';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;