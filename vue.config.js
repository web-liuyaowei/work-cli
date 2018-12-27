const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  // 开发环境  web服务的配置
  devServer: {
    // 启动项目时是否自动打开浏览器
    open: true,
    // 修改端口 默认为8080
    port: 8082,
    // 配置代理   Nignx 代理  常常需要根据 /base 等请求前缀进行转发
    proxy: {
      "/base": {
        // 目标 API 地址  开发时经常需要指向测试环境的后台接口地址
        target: "http://192.168.1.231:9081/",
        // 是否需要开启    websockets代理
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        // 是否需要虚拟主机站点
        pathRewrite: {
          "^/base": ""
        }
      }
    }
  },
  configureWebpack: {
    // 生产环境不输出console
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, //console
              drop_debugger: false
            }
          }
        })
      ]
    },
    // 配置文件目录别名
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        utils: "@/utils"
      }
    }
  }
  // 改变打包后静态资源的访问地址   原来默认的访问 css地址为  /css/a.css  变为 /static/h5/css/a.css
  // baseUrl: "/static/h5",
  // 改变打包文件的位置   原来默认打在根目录的dist文件  变为  根目录的 static/h5 文件
  // outputDir: "./static/h5"
};
