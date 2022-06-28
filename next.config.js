/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org'],
  },
  future: {
    webpack5: true,
  },
}

module.exports = nextConfig
