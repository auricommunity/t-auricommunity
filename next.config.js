/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://깃허브아이디.github.io/레파지토리이름' 
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/레파지토리이름' 
    : ''
}

module.exports = nextConfig
