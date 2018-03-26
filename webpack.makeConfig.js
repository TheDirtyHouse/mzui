var webpack = require('webpack');
var path = require("path");
var fs = require("fs");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");// 默认的webpack 会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来
var CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除文件
var CopyWebpackPlugin = require('copy-webpack-plugin'); // 拷贝文件


var now = {
  month:new Date().getMonth()+1,
  day:new Date().getDate(),
  hour:new Date().getHours(),
  minute:new Date().getMinutes(),
  toString:function() {
    this.month = +this.month < 10 ? '0' + this.month : this.month;
    this.day = +this.day < 10 ? '0' + this.day : this.day;
    this.hour = +this.hour < 10 ? '0' + this.hour : this.hour;
    this.minute = +this.minute < 10 ? '0' + this.minute : this.minute;
    return this.month+''+this.day+''+this.hour+''+this.minute;
  }
};



function makeConfig(cfg){
  var package_config = cfg.packageConfig;
  var isRelease = cfg.isRelease;

  var config={
    entry: package_config.entryList,//所有入口js列表
    externals:package_config.noPackage,//哪些文件不参与打包
    output: {
      libraryTarget: 'umd',//使用umd方式打包，这样能兼容amd,cmd规范
      library:["mzui","[name]"],//["mzui","[name]"],//定义库的名字
      umdNamedDefine: true,
      path: package_config.outputRoot,//输出的目录
      filename: package_config.file_add_hash?'[name]/index-[chunkhash:8].js':'[name]/index.js'//输出的文件名
     // publicPath: "./maps/",
    },
    devServer:{//配置web服务器
      contentBase: "./",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true//实时刷新
    },
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel-loader'},
        {
          test:/\.vue$/,loader:'vue-loader',options:{
            loaders:{
              scss:ExtractTextPlugin.extract( {fallback:"vue-style-loader", use:"css-loader!postcss-loader!sass-loader"}),
              sass:ExtractTextPlugin.extract( {fallback:"vue-style-loader", use:"css-loader!postcss-loader!sass-loader"})
              // 'scss': ['vue-style-loader','css-loader','postcss-loader','sass-loader'].join('!'),
              // 'sass': ['vue-style-loader','css-loader','postcss-loader','sass-loader'].join('!'),
            }
          }
        },
        {test: /\.css$/, loader: ExtractTextPlugin.extract( {fallback:"style-loader", use:"css-loader!postcss-loader!sass-loader"})},
        {test: /\.scss$/, loader: ExtractTextPlugin.extract( {fallback:"style-loader", use:"css-loader!postcss-loader!sass-loader"})},//publicPath:"/build/css"
        {test: /\.(jpg|png|svg|gif)$/, loader: "url-loader",options:{
          limit:8192,
          name:"../resource/[name].[ext]",//会统一替换成引用这个目录下的文件，所以请将资源放入resource下
        }}//小于8192字节的将转换成base64
      ]
    },
    plugins:[
      new CleanWebpackPlugin([package_config.outputRoot,"maps"], {
              root: __dirname,
              verbose: true,
              dry: false,
          }),
      new ExtractTextPlugin(/*是否将分散的css文件合并成一个文件*/
      {
        filename:package_config.file_add_hash?"[name/style-[contenthash:8].css":"[name]/style.css",
        allChunks:false,
        // disable:true
      }),
      new CopyWebpackPlugin([
        {
            from:  __dirname+'/resource',
            to:package_config.outputRoot+"/resource",
        },
        {
            from:  __dirname+'/plugins',
            to:package_config.outputRoot+"/plugins",
        }
      ]),
      new webpack.DefinePlugin({
        'webpack.env': isRelease,
        'webpack.componentUI':"mzui"
      })
    ]
  };

  if(package_config.CommonsChunk){
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name:"webpack_common",
      minChunks:2
    }) );
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name:"webpack_common_require",
      minChunks:Infinity
    }) );
  }

  
  for( var key in package_config.htmlConfig){
    var htmlconfig = {
          chunks:[key],
          filename:package_config.htmlConfig[key].html_outname,
          template:package_config.htmlConfig[key].html_file//new 一个这个插件的实例，并传入相关的参数
    };

    //如果是需要合并公共块的话，这里需要引入公共块
    if(package_config.CommonsChunk){
      htmlconfig.chunks.push("webpack_common");
      htmlconfig.chunks.push("webpack_common_require");
    }
    //是否在引用的资源后增加?hash值
    if(package_config.file_add_ver_hash){
      htmlconfig.hash=true;
    }
    
    config.plugins.push(new HtmlWebpackPlugin(htmlconfig) );
  }


  if(isRelease){
    config.output.sourceMapFilename= 'maps/[file].map';
    //生成sourcemap
    config.devtool= '#source-map';//'#cheap-module-eval-source-map';//'#source-map';
    //压缩代码
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({sourceMap:true})
    );
  }



  return config;

}

module.exports = function(config){
  return makeConfig(config);
};




