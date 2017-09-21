
<template>

		<div v-show="views.all.show" style="width:100%;height:100%;display:none;">
			

			<transition name="alpha">
				<div id="header" v-show="views.nav.show">
					<mz-header 
					  ref="mzNavHeader"
      			:nav-config="navConfig"
						v-on:btn-nav-left="btnNavLeft" 
						v-on:btn-nav-right="btnNavRight">
					</mz-header>
				</div>
			</transition>


			<div id="content-background" v-show="views.content.show">
					<div id="content" class="touch-scroll">
			
						<mz-view v-bind:config="viewConfig">
							<section id="viewLoading" v-show="views.loading.show" style="width:100%;height:100%;" class="flex-row flex-main-center flex-cross-center">
							<img src="../../../resource/loading.svg" style="width:30px;height:30px;display:inline-block;">
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
	defaultMixin:{
		data:{
			viewConfig:{
	      appear:false,
	      transName:"alpha",
	    },
	    navConfig:{
	      mask:{show:0,shadow:0,},
	      title:"菜单标题",
	      leftBtn:{type:"close",title:"左标题"},
	      rightBtn:{type:"service",title:"右标题"}
	    },
	    views:{
				showViews:[],
				all:{show:false},
				nav:{show:false},
				content:{show:false},
				loading:{show:false},
				// index:{
				// 	show:false,
				// 	setNav:{
				// 		title:"",
				// 		rightBtn:{type:"",title:""},
				// 		leftBtn:{type:"",title:""},
				// 		inntercept:function(e,type){
	   //          if(type==='left'){
	   //          }else{return false;}
	   //          return true;
	   //        },
				// 	}
				// }
			},
  	}
  },
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
		initPage:function(){

			this.views.loading.show=false;
			this.views.all.show=true;
			this.views.nav.show=true;
			this.views.content.show=true;
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
		openPopView:function(name,options){
			options=options||{};
			let self=this;
			if(!options.openNav){
				self.openNavMask(true);
			}
			options.viewType="pop";
			options.openNav = options.openNav||false;
			self.openView(name,options);
		},
		closePopView:function(name,options){
			options=options||{};
			let self=this;
			if(!options.openNav){
				self.closeNavMask(true);
			}
			if(name){
				for(var i = 0 ; i < self.views.showViews.length ; i++ ){
					if( self.views.showViews[i].name===name){
						var view = self.views.showViews[i];
						self.views.showViews.splice(i,1);
						options.transName = options.transName || view.transName;
						options.openNav = options.openNav||false;
					}
				}
			}
			self.closeView(name,options);
		},
		changeView:function(name,options){//切换view

			options=options||{};
			let self=this;
			let curView = null;

			while( this.views.showViews.length > 1 ){
				curView = this.views.showViews.pop();
				if(curView&&curView.type==='pop'){
					self.closeView(curView.name);
					self.closeNavMask();
				}
			}

			curView = this.views.showViews.pop();

			if(curView){//当前是否有展示的view
				self.closeView(curView.name,options);
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
				if(options.open_callback){options.open_callback();}
				return;
			}else{
				if(options.open_callback){
					this.openView_callback=function(){
						self.openView_callback=null;
						options.open_callback();
					};
				}
				self.viewConfig.transName=options.transName||"normal";//页面切换的动画名称

				self.views.showViews.push({
					name:name,
					type:options.viewType||"view",
					transName:self.viewConfig.transName
				});
				
				self.views[name].show = true;
				self.setViewNavConfig(self.views[name]);

			}
		},
		closeView:function(name,options){//关闭view
			options=options||{};
			let self=this;

			if(!name){
				if(self.views.showViews.length>0){
					var view = self.views.showViews.pop();
					if(view){
						name=view.name;
						options.transName = options.transName || view.transName;
						options.openNav = options.openNav||view.transName;
					}
				}
			}
			if(name){//当前是否有展示的view
				if(options.close_callback){
					this.closeView_callback=function(){
						self.closeView_callback=null;
						options.close_callback();
					};
				}
				this.viewConfig.transName = options.transName||"normal";//页面切换的动画名称
				this.views[name].show = false;//关闭页面
			}else{
				if(options.close_callback)options.close_callback();
			}
		},
		openPage:function(){},
		setViewNavConfig:function(view){
			if(view.setNav){

				this.navConfig.title = view.setNav.title;
				this.navConfig.leftBtn.type = view.setNav.leftBtn.type;
				this.navConfig.leftBtn.title = view.setNav.leftBtn.title;
				this.navConfig.rightBtn.type = view.setNav.rightBtn.type;
				this.navConfig.rightBtn.title = view.setNav.rightBtn.title;

				// views.setNav.inntercept;
			}
		},
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
		views:{
			default:{
				showViews:[],
				all:{show:false},
				nav:{show:false},
				content:{show:false},
				loading:{show:false},
				// index:{
				// 	show:false,
				// 	setNav:{
				// 		title:"",
				// 		rightBtn:{type:"",title:""},
				// 		leftBtn:{type:"",title:""},
				// 		inntercept:function(e,type){
	   //          if(type==='left'){
	   //          }else{return false;}
	   //          return true;
	   //        },
				// 	}
				// }
			},type:Object
		}

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


#content{
  width:100%;height:100%;
  overflow: hidden;
}

</style>