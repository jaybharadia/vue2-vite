// styleguide.webpack.config.js
const { defineConfig } = require("vite");
const VitePluginVue = require("@vitejs/plugin-vue2");

module.exports = defineConfig({
    plugins: [VitePluginVue()],
});
