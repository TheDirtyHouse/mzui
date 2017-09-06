
/**
 * 编写所有的组件入口文件信息
 *  格式
 * 组件最终名称:组件入口文件的位置
 */
var entryList={
  index:"./example/src/index.js",
};

/**
 * 这里用来编写example下页面文件的信息
 * 格式
 * 组件的名称（对应entryList的key）：{
 *  html_outname：生成后页面的名称
 *  html_file:需要进行处理的页面文件位置
 * }
 */
var htmlConfig={
	index:{
		html_outname:"index.html",
		html_file:__dirname + "/example/index.html",
	 }
};

/**
 * 工程打包后输出的目标根目录
 * @type {[type]}
 */
var output = __dirname+'/dist_example';


var package_config={
	outputRoot: output,
	CommonsChunk:false,//是否提取公共使用的js代码段到公共文件内,做插件的话一般为false
	/**
	 * 配置入口js的信息，格式如下
	 * 打包后入口js名字:入口js的位置，
	 */
	entryList:entryList,
	/**
	 * 配置每个入口页面的信息，格式如下
	 * 入口js的名称:{
	 *   html_outname:"入口页面打包输出的名称",
	 *   html_file:"入口页面的完整路径"
	 * }
	 */
	htmlConfig:htmlConfig,
	file_add_ver_hash:false,
	file_add_hash:false,//做插件的话一般为false
	noPackage:{
    vue: 'Vue'
    // "../../button/src/button.vue":"cxVue.button.default",
  },
};
module.exports = function(config)
{
	return package_config;
};



