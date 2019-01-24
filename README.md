# webpack-start
**这是一个初始化的webpack项目，可以用于任何项目的起步。配置文件中的每一项基本都加了注释说明，以供参考** https://github.com/bigbag01/webpack_start

在配置过程中遇到了一些问题，在此作为记录。

1. 创建项目的时候，安装了webpack之后还会提示要安装webpack-cli，本地安装之后依旧会出现安装提示，再全局安装一下webpack-cli就可以了，我安装的webpack版本是4.29.0，webpack-cli版本是3.2.1，本地全局的版本目前是一样的。

2. devtool可选的有好几种，在中小型项目中用”eval-source-map“比较合适，但是生产环境会影响安全和性能

3. webpack可以提供本地服务器，要下载dev依赖 webpack-dev-server

4. babel loader是用来将将最新标准的js代码（ES6,ES7,JSX）编译到ES5从而使浏览器能支持。核心功能在babel-core包中，babel-env-preset是用来解析ES6的

5. babel-core版本为6和babel-loader版本为8无法一起工作，将babel-core升为版本7或者babel-loader降为版本7可以正常工作

6. 在配置css-loader,style-loader 的时候发现一个问题，当一个js文件里又有import又有module.exports的时候会报错  
7. 参考后面这个链接https://blog.csdn.net/u013809856/article/details/80312774

8. css预处理器的部分暂时不看了，等以后要写的时候再看吧

