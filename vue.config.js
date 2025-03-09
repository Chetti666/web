const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/web/', // Reemplaza con el nombre de tu repositorio
  outputDir: 'docs'
})
