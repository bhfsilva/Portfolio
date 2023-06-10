module.exports = {
  trailingSlash: false,
  async redirects() {
    return [{source: '/api', destination: '/', permanent: true}]
  }
}
