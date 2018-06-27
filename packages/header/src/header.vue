
/**
数据属性
	v-bind:nav-config="objectName" //导航栏的基本配置，对象属性如下
	
	objectName:
	{
		leftBtn:{
			type:"title",//左上角按钮的模式[title:文字模式,close:关闭icon，back:返回icon],
			title::"添加优惠券",//导航栏右上角菜单标题（如果是文字模式的话）
		},
		rightBtn:{
			type:"title",//右上角按钮的模式[title:文字模式,service:客服icon]
			title::"添加优惠券",//导航栏右上角菜单标题（如果是文字模式的话）
		},
		title:"标题",//导航栏中间标题,
		mask:{
      show:false,//是否打开遮罩层，打开后将无法点击导航栏
      shadow:false,//是否显示遮罩层阴影
		}
	}

事件属性
	v-on:btn-left  / v-bind:btn-left="btnLeft":导航栏左边按钮的事件
	v-on:btn-right / v-bind:btn-right="btnLeft":导航栏右边按钮的事件

方法
	给组件添加  ref="navHeader" 属性后，通过$refs来直接操作方法
	app.$refs.navHeader.openMask:打开遮罩
	app.$refs.navHeader.closeMask:打开遮罩
 */
<template>
		<div id="nn-header" v-bind:nopad="nopad" v-bind:noshadow="navConfig.mask.shadow>0&&navConfig.mask.show>0" class="flex-row flex-main-center flex-cross-center">
			
			<transition name="alpha">
				<div id="navMask" v-show="navConfig.mask.show>0" v-bind:shadow="navConfig.mask.shadow>0" style="display: none;"></div>
			</transition>

			<div v-on:click="btnLeftMenu" id="nav-left-btn" left class="flex-row flex-main-center flex-cross-center">
				
				<i v-if="navConfig.leftBtn.type=='close'">
					<svg id="icon-close" viewBox="0 0 10 10" width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.1">
						<line x1="1" y1="1" x2="8" y2="8"/>
						<line x1="1" y1="8" x2="8" y2="1"/>
					</svg>
				</i>

				<i v-if="navConfig.leftBtn.type=='back'">
					<svg id="icon-left" viewBox="0 0 10.63 18.42" width="10.63" height="18.42" xmlns="http://www.w3.org/2000/svg" version="1.1">
						<line x1="1" y1="9.71" x2="10.63" y2="1"/>
						<line x1="1" y1="9.21" x2="10.63" y2="18.42"/>
					</svg>
				</i>

				<i v-if="navConfig.leftBtn.type=='title'">
					{{navConfig.leftBtn.title}}
				</i>

			</div>
			
			<span id="title">{{navConfig.title}}</span>
			
			<div v-on:click="btnRightMenu" id="nav-right-btn" right class="flex-row flex-main-center flex-cross-center">
				<i v-if="navConfig.rightBtn.type=='service'" service>
				</i>
				<i id="rightTitle" v-if="navConfig.rightBtn.type=='title'">
					{{navConfig.rightBtn.title}}
				</i>
			</div>

		</div>
</template>
<script>
module.exports={
	name:'my-header',
	methods:{
		btnLeftMenu:function(e){
			console.log('click header left menu');
			this.$emit('btn-nav-left', e);
		},
		btnRightMenu:function(e){
			console.log('click header right menu');
			this.$emit('btn-nav-right', e);
		},
		openMask:function(showShadow){
			this.navConfig.mask.show++;
			if(showShadow)this.navConfig.mask.shadow++;
		},
		closeMask:function(){
			this.navConfig.mask.show--;
			this.navConfig.mask.show=this.navConfig.mask.show<0?0:this.navConfig.mask.show;
			if(this.navConfig.mask.show<=0){
				this.navConfig.mask.shadow=0;
			}
		}
	},
	data:function(){
			return {
				nopad:false,//导航栏头部没有20像素间隙

			};
		},
	mounted:function(){
		if ( !/ipad|iphone|mac/i.test( navigator.userAgent.toLowerCase() ) ){
			this.nopad=true;
		}
	},
	props:{
			navConfig:{
				default:{
					mask:{
						show:0,
						shadow:0,
					},
					title:"中间标题",
					leftBtn:{type:"close",title:"左标题"},
					rightBtn:{type:"service",title:"右标题"}
				},
				type:Object
			}
		},
};
</script>

<style scoped lang="sass">
$barHeight:64px;
$barMarginTop:20px;
$fontSize:17/14+rem;
$fontSize2:1rem;
$colorTitle:#424242;
$colorTitle2:#77747e;
$maskAlpha:.7;


#nn-header{
	padding-top:$barMarginTop;

	box-shadow: 0 1px 0px #E5E5E5;
	background:white;
	width:100%;
	height:$barHeight;
}
#nn-header[noshadow]{
	box-shadow: 0 0 0;
}

#rightTitle{
	font-style: normal;
	font-size:$fontSize2;
	color:$colorTitle2;
}
#title{
	font-size:$fontSize;
	color:$colorTitle;
}

#icon-close{
	stroke:#77747E;
}
#icon-left{
	stroke:#77747E;
	stroke-width:2px;
}

i[service]{
	width:32px;
	height:32px;
	background-size: 100% 100%;
	background-image: url("data:image/png;base64,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");
}

div[right],
div[left]{
	position:absolute;
	top:0;
	padding-top:$barMarginTop;
	height:100%;
	padding-left:10px;
	padding-right:10px;
}

div[left]{
	left:0;
}
div[right]{
	right:0;
}


#nn-header[nopad]
{
	padding-top:0;
	div[left],div[right]{
		padding-top:0;
	}
}



#navMask{
  position:absolute;
  top:0;
  left:0;
  width:100%;height:100%;
  /*background:rgba(0,0,0,0.1);*/
  box-shadow: 0 0px 1px rgba(0,0,0,$maskAlpha);
  z-index:2;
}
#navMask[shadow]{
	background:rgba(0,0,0,$maskAlpha);
}


</style>