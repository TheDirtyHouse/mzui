
/**
 * 编写所有的组件入口文件信息
 *  格式
 * 组件最终名称:组件入口文件的位置
 */
var entryList={
  button:"./packages/button/src/button.js",
  input:"./packages/input/src/input.js",
  popupInput:"./packages/popup-input/src/popup-input.js",
  cell:"./packages/cell/src/cell.js",
  selectList:"./packages/selectList/src/selectList.js",

  header:"./packages/header/src/header.js",
  page:"./packages/page/src/page.js",

  mask:"./packages/mask/src/mask.js",
  toast:"./packages/toast/src/toast.js",
  messageBox:"./packages/messageBox/src/messageBox.js",
 	loading:"./packages/loading/src/loading.js",
  addressPicker:"./packages/addressPicker/src/address-picker.js",
  actionSheet:"./packages/actionSheet/src/actionSheet.js",

  commonCss:"./packages/common_scss/common-css.js",
  bundle:"./packages/bundle/bundle.js",

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
	bundle:{
		html_outname:"bundle.html",
		html_file:__dirname + "/example/bundle.html",
	 },
	page:{
		html_outname:"page.html",
		html_file:__dirname + "/example/page.html",
	},
	header:{
		html_outname:"header.html",
		html_file:__dirname + "/example/header.html",
	},
	mask:{
		html_outname:"mask.html",
		html_file:__dirname + "/example/mask.html",
	},
	selectList:{
		html_outname:"selectList.html",
		html_file:__dirname + "/example/selectList.html",
	},
	cell:{
		html_outname:"cell.html",
		html_file:__dirname + "/example/cell.html",
	 },
	button:{
		html_outname:"button.html",
		html_file:__dirname + "/example/button.html",
	 },
	input:{
		html_outname:"input.html",
		html_file:__dirname + "/example/input.html",
	 },
	popupInput:{
		html_outname:"popupInput.html",
		html_file:__dirname + "/example/popupInput.html",
	 },
	actionSheet:{
		html_outname:"actionSheet.html",
		html_file:__dirname + "/example/actionSheet.html",
	 },
	toast:{
		html_outname:"toast.html",
		html_file:__dirname + "/example/toast.html",
	 },
	loading:{
		html_outname:"loading.html",
		html_file:__dirname + "/example/loading.html",
	 },
	messageBox:{
		html_outname:"messageBox.html",
		html_file:__dirname + "/example/messageBox.html",
	 },
	addressPicker:{
		html_outname:"addressPicker.html",
		html_file:__dirname + "/example/addressPicker.html",
	 },
};

/**
 * 工程打包后输出的目标根目录
 * @type {[type]}
 */
var output = __dirname+'/lib';


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



