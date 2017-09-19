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


					<mz-header 
					  ref="mzNavHeader"
      			:nav-config="navConfig"
						v-on:btn-nav-left="btnNavLeft" 
						v-on:btn-nav-right="btnNavRight" 
					>
					</mz-header>
				</div>
			</transition>


			<div id="content-background" v-show="nnViewSwitch.content">
					<div id="content" class="touch-scroll">
			
						<mz-view v-bind:config="viewConfig">
							<section id="viewLoading" v-show="nnViewSwitch.loading" style="width:100%;height:100%;" class="flex-row flex-main-center flex-cross-center">
							<iframe src="resource/loading.svg" style="width:30px;height:30px;"></iframe>
							</section>
						</mz-view>

						<slot></slot>

					</div>
			</div>
			<!-- <div id="footer"></div> -->
		</div>

</template>

<script>
import vueHeader from '../../header/src/header.js';
import vueView from '../../view/src/view.js';
// var vuePage = {
export default {
	name:'mz-page',
	methods:{
		afterTransEnter:function(e){if (this.openView_callback) { this.openView_callback(e); } },
		afterTransLeave:function(e){if (this.closeView_callback) { this.closeView_callback(e); } },
		btnNavLeft:function(e){
			this.$emit('btn-nav-left', e);
		},
		btnNavRight:function(e){
			this.$emit('btn-nav-right', e);
		},
		afterLeave:function(e){	
			this.$emit('onleave', e);
		},
		initPage:function(){

			this.nnViewSwitch.loading=false;
			this.nnViewSwitch.navmask=false;

			this.nnViewSwitch.all=true;
			this.nnViewSwitch.nav=true;
			this.nnViewSwitch.content=true;
			this.nnViewSwitch.pageMask =false;
		},
		showPageLoading:function(){
			this.openView("loading",{transName:"alpha"});
		},
		openNavMask:function(showShadow){
			this.$refs.mzNavHeader.openMask(showShadow);
		},
		closeNavMask:function(){
			this.$refs.mzNavHeader.closeMask();
		},
		openPopView:function(){
			
		},
		changeView:function(name,options){//切换view
			options=options||{};
			let self=this;
			let curView = this.nnViewSwitch.curView;
			if(curView){//当前是否有展示的view
				self.closeView(curView,options);
				setTimeout(function(){
          self.openView(name,options);
        },1);
			}else{
				self.openView(name,options);
			}
		},
		openView:function(name,options){//打开view
			options=options||{};
			let self=this;

			if(!name){
				self.nnViewSwitch.curView=null;
				if(options.open_callback){options.open_callback();}
				return;
			}else{
				if(options.open_callback){
					this.openView_callback=function(){
						self.openView_callback=null;
						options.open_callback();
					};
				}
				self.nnViewSwitch.curView=name;
				self.viewConfig.transName=options.transName||"normal";//页面切换的动画名称
				self.nnViewSwitch[name] = true;
			}
		},
		closeView:function(curView,options){//关闭view
			options=options||{};
			let self=this;
			curView = curView || this.nnViewSwitch.curView;
			if(curView){//当前是否有展示的view
				if(options.close_callback){
					this.closeView_callback=function(){
						self.closeView_callback=null;
						options.close_callback();
					};
				}
				this.viewConfig.transName=options.transName||"normal";//页面切换的动画名称
				this.nnViewSwitch[curView] = false;//关闭页面
			}else{
				if(options.close_callback)options.close_callback();
			}
		},
		openPage:function(){}
	},
	data:function(){
			return {
			};
		},
	mounted:function(){
		console.log("vue mounted mzPage");
		var self=this;
		this.viewConfig.afterTransEnter = this.afterTransEnter;
		this.viewConfig.afterTransLeave = this.afterTransLeave;
		// self.nnViewSwitch.loading=false;
		// this.nnViewSwitch.pageMask =true;
		
		var header = document.getElementById('header');
    var content = document.getElementById('content-background');
    var footer = document.getElementById('footer');
    if (header) { content.setAttribute('header', ''); }
    if (footer) { content.setAttribute('footer', ''); }

	},
	components:{
		mzHeader:vueHeader,
		mzView:vueView,
	},
	props:{
		viewConfig:{default:null,type:Object},
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
		},
		
		nnViewSwitch:{
			default:{
				curView:null,//当前展示的页面名称

				pageMask:false,
				navmask:false,
				all:false,
				nav:false,
				content:false,
				loading:false
			},
			type:Object
		},

	},
};

// export { vueView as view ,vuePage as page};

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