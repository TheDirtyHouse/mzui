var path = require("path");
var webpack = require("webpack");
var colors = require("colors");

colors.setTheme({
  developerWarm: ['yellow', 'bgBlack','bold']
});


var package_config =null;
var isRelease = false;
for (var i in process.argv) {
  if (process.argv[i] === "-p" || process.argv[i] === "--production") {
      isRelease = true;
      break;
  }
}

module.exports = function(env,report){
  var report=false;
	console.log( ("=================打包配置为:"+env + ",isRelease:" + isRelease).developerWarm);
  switch(env){
    case "devIndex":{
      package_config = require('./package.index.config.js')({isRelease:isRelease});
    }break;
    case "dev":{//开发调试
      package_config = require('./package.config.js')({isRelease:isRelease});
    }break;
    default:
    case "package":{
      package_config = require('./package.config.js')({isRelease:isRelease});
    }break;
    case "report":{
      report=true;
      package_config = require('./package.config.js')({isRelease:isRelease});
    }break;
  }

	return require('./webpack.makeConfig.js')({packageConfig:package_config,isRelease:isRelease,report:report}); //通用配置文件
};