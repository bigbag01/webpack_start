const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    // 定义入口文件，main.js中引用的其他模块也会被打包
    entry: __dirname + "/app/main.js",
    // 定义出口，将所有文件都输出到bundle.js中，放到public文件夹下
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    mode:'development',
    // 建议中小型项目用，用于开发阶段，TODO:生产阶段一定关掉
    devtool: 'eval-source-map',
    devServer:{
        // 启动静态服务器的位置。默认为项目根目录，这里设置为public文件夹
        contentBase:'./build',
        // 单页应用中当404的时候定向到特定页面（404页面）
        historyApiFallback:true,
        // 服务器ip
        host:'0.0.0.0',
        // 监听端口，缺省值为8080
        port:8081,
        // 设置为true,当源文件改变的时候会自动刷新页面
        inline:true,
        // 设置为true则在编译出错的时候在浏览器页面上会显示错误，缺省值为false
        overlay:true,
        // 设置为true则在传输时会对服务器资源进行gzip压缩，提高传输速率但会增加服务器和客户端负载
        compress:false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:{
                    loader:"babel-loader"
                },
                exclude: /node_modules/
            },
            // css loader,需要的时候再去安装style-loader,css-loader,
            // 这里作为一个文件引入多个loader的示例
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader",
                    options:{
                        modules: true,
                        localIdentName: '[name]__[local]__[hash:base64:5]' //指定css类名格式，避免全局变量名
                    }
                }]
            }
        ]
    },
    // 在加plugin之前的东西已经可以让工程跑起来，并且支持热更新了。
    plugins:[
        // 在打包后的js文件中插入版权声明的插件
        new webpack.BannerPlugin('版权所有，翻版必究'),
        // 压缩js代码
        new webpack.optimize.UglifyJsPlugin(),
        // 自动生成index.html
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        })
    ]
}