/**
 * webpack postcss插件的配置文件
 */
module.exports = {
  plugins: [
    require('autoprefixer')({browsers: ['last 5 version']})
  ]
};