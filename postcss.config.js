/**
 * webpack postcss插件的配置文件
 */
module.exports = function(file, options, env ){
  
  var ret = {
  	plugins: [
	  	require('autoprefixer')({browsers: ['last 5 version']}),	    
	  ]
	};

	if(env === 'production' ){
		console.log("postcss production");
		ret.plugins.push( require('cssnano')() );
	}

  return ret;
};