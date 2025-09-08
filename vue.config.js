const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vue-big-screen/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 方案1：禁用 host 检查（简单但安全性较低）
    allowedHosts: 'all',
    
    // 方案2：或者可以指定允许的 host（推荐，更安全）
    // allowedHosts: [
    //   'localhost',
    //   '.natappfree.cc',  // 允许所有 natappfree.cc 的子域名
    //   'c5876ec6.natappfree.cc'  // 或者指定具体的域名
    // ],
    
    // 其他配置
    port: 8081,
    host: '0.0.0.0'  // 允许外部访问
  }
})