module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hyundai-sass-vue/' : '/',
  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
};
