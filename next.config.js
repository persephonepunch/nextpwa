const domains = require(`./.design-sync/asset-domains.json`)
const withPWA = require ('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  }
})