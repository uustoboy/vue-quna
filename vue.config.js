const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("styles", resolve("src/assets/styles/"))
      .set("common", resolve('src/common/'));
  },
  publicPath: "./", //配置打包时的相对路径
  devServer: {
    port: 8083,
    proxy: {
      "/api": {
        target: "http://localhost:8083",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [resolve('./src/assets/styles/varibles.styl'), resolve('./src/assets/styles/mixins.styl')]
      },
    }
  }
};
