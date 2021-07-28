module.exports = {
  devServer: {
    hot: true, //热加载
    // host: '0.0.0.0', //ip地址
    port: 9000, //端口
    https: false, //false关闭https，true为开启
    open: true, //自动打开浏览器
  },
  configureWebpack:{
    resolve:{
      // 配置别名
      alias:{
        "assets":"@/assets",
        'components': '@/components',
        'views': '@/views',

      }
    }
  }
}