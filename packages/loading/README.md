# mz-vue-loading


```Javascript
 
loading.set({					 //页面有多个loading显示相同时，可在页面加载完是设置
	text: '正在加载',     //设置默认loading是显示的文案
	className: 'c1, c2' //可自定义 除了默认另外提供loading-full
});  						  
	
loading.show({       //显示loading
	text: '正在加载',
	className: 'c1, c2'    
}, 'log信息');

loading.hide(1, 'log信息'); //第一个参数有则强制关闭所有loading