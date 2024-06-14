
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hyundai-sass-vue/' : '/'
}


module.exports = {
  publicPath : './'
}

module.exports = {
  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
};