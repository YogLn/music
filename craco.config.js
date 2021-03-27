const path = require('path')
const reslove = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      "@": reslove("src"),
      "components": reslove("src/components")
    }
  }
}