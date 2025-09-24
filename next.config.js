/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repo = 'football_analytics'; // リポジトリ名

const nextConfig = {
  output: 'export',
  distDir: 'docs',                // GitHub Pages 公開用に docs へ出力
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,            // 画像最適化を無効化（静的出力で必要）
  },
};

module.exports = nextConfig;