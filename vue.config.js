module.exports = {
  devServer: {
    hot: true, //热加载
    // host: '0.0.0.0', //ip地址
    port: 9000, //端口
    https: false, //false关闭https，true为开启
    // open: true, //自动打开浏览器/
    // 解决跨域
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'localhost:8888',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        "assets": "@/assets",
        'components': '@/components',
        'views': '@/views',

      }
    }
  }
}