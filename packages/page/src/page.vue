/**
数据属性
	v-bind:nav="nav":导航栏相关数据,具体如下：
	{
		leftBtn:"title",左上角按钮的模式[title：文字模式	back:返回icon	close:关闭icon ]
		rightBtn:"service",右上角按钮的模式[title：文字模式	service:客服]
		title:"标题栏",
		leftTitle:"左上角标题",左上角文字模式下的标题
		rightTitle:"右上角标题",右上角文字模式下的标题
	} 

	nn-view-switch="switch": 控制页面view的开关，默认数据如下：
	{
		all:false, 整个页面
		nav:false, 导航栏
		content:false, view区域
		loading:true	view的加载页面
	}

事件属性
	v-on:onright="navRightBtn" 	导航栏右上角点击事件
	v-on:onleft="navLeftBtn"	导航栏左上角点击事件

 */
<template>

		<div v-show="nnViewSwitch.all" style="width:100%;height:100%;display:none;">
			
			<div id="pageMask" v-show="nnViewSwitch.pageMask" style="display: none;">
			</div>

			<transition name="alpha">
				<div id="header" v-show="nnViewSwitch.nav">
					<transition name="alpha">
						<div id="navmask" v-show="nnViewSwitch.navmask" style="display: none;">
						</div>
					</transition>
					<my-header 
						v-on:btnleftmenu="btnLeftMenu" 
						v-on:btnrightmenu="btnRightMenu" 
						v-bind:title="nav.title" 
						v-bind:left-btn="nav.leftBtn" 
						v-bind:right-btn="nav.rightBtn" 
						v-bind:right-menu-title="nav.rightTitle"
						v-bind:left-menu-title="nav.leftTitle"
						>
					</my-header>
				</div>
			</transition>


			<div id="content-background" v-show="nnViewSwitch.content">
					<div id="content" class="touch-scroll">
			
						<transition appear name="alpha" v-on:after-leave="afterLeave">
							<section id="viewLoading" v-show="nnViewSwitch.loading" style="width:100%;height:100%;" class="flex-row flex-main-center flex-cross-center">
							<iframe src="resource/loading.svg" style="width:30px;height:30px;"></iframe>
							</section>
						</transition>

						<slot></slot>

					</div>
			</div>
			<!-- <div id="footer"></div> -->
		</div>

</template>

<script>
import vueHeader from '../../header/src/header.js';
module.exports={
	name:'mz-page',
	methods:{
		btnLeftMenu:function(e){
			this.$emit('onleft', e);
		},
		btnRightMenu:function(e){
			this.$emit('onright', e);
		},
		afterLeave:function(e){	
			this.$emit('onleave', e);
		},
		openPage:function(){
			this.nnViewSwitch.all=true;
			this.nnViewSwitch.nav=true;
			this.nnViewSwitch.content=true;
			this.nnViewSwitch.loading=true;
			this.nnViewSwitch.pageMask =false;
		}
	},
	data:function(){
			return {};
		},
	mounted:function(){
		var self=this;
		// self.nnViewSwitch.loading=false;
		// this.nnViewSwitch.pageMask =true;
		
		var header = document.getElementById('header');
    var content = document.getElementById('content-background');
    var footer = document.getElementById('footer');
    if (header) { content.setAttribute('header', ''); }
    if (footer) { content.setAttribute('footer', ''); }

	},
	components:{
		myHeader:vueHeader,
	},
	props:{
		nav:{
			default:function(){
				return {
					leftBtn:"back",
					rightBtn:"service",
					title:"标题栏",
					leftTitle:"",
					rightTitle:"",
				};
			}
		},
		
		nnViewSwitch:{
			default:function(){
				return{
					pageMask:false,
					navmask:false,
					all:false,
					nav:false,
					content:false,
					loading:true
				};
			},
			type:Object
		},

	},
};
</script>

<style scoped lang="sass">
$headerHeight:64px;
$footerHeight:64px;
$maskAlpha:.7;


#header{
  position:absolute;
  left:0;top:0;
  height:$headerHeight;
  width:100%;
  z-index:1;
  background:blue;
}
#footer{
  position:absolute;
  left:0;bottom:0;
  height:$footerHeight;
  width:100%;
  z-index:1;
  background:green;
}

#content-background[header]{
   padding-top:$headerHeight;
}
#content-background[footer]{
  padding-bottom:$footerHeight;
}
#content-background{
  left:0;top:0;
  position:absolute;
  z-index:0;
  width:100%;height:100%;
}

#content-background[header]{
  #content-background-uprefresh{
      padding-top:$headerHeight;
  }
}

#content-background-uprefresh{
  top:0;
  position: absolute;
  text-align: center;
  width:100%;
  font-size:12px;
}

#content-background[footer]{
  #content-background-downrefresh{
      padding-bottom:$footerHeight;
  }
}


#content-background-downrefresh{
  z-index:-1;
  bottom:0;
  position: absolute;
  text-align: center;
  width:100%;
  font-size:12px;
}
#pageMask,
#navmask{
  position:absolute;
  top:0;
  left:0;
  width:100%;height:100%;
  background:rgba(0,0,0,$maskAlpha);
  -webkit-box-shadow: 0 1px 0px rgba(0,0,0,$maskAlpha);
  z-index:2;
}
#pageMask{
	z-index:200;
}
#content{
  width:100%;height:100%;
  overflow: hidden;
}

</style>