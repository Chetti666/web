const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/nombre-repo/' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 8192, // Tamaño máximo en bytes para convertir a base64
            name: 'img/[name].[hash:7].[ext]' // Nombre de archivo de salida
          }
        }
      ]
    }
  }
});