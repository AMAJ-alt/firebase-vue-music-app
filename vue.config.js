const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Music App',
    themeColor: '#ff5e3a',
    manifiestOption: {
      short_name: 'Music',
    }
  }
});
