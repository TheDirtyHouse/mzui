/**
 * webpack postcss插件的配置文件
 */
module.exports = function(file, options, env ){
  
  var ret = {
  	plugins: [
	  	require('autoprefixer')({browsers: ['>= 5%','Firefox < 20','ie 6-8','last 2 versions']}),	    
	  ]
	};

	if(env === 'production' ){
		console.log("postcss production");
		ret.plugins.push( require('cssnano')() );
	}

  return ret;
};