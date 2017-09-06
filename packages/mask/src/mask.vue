/**
 * 使用方法
 *  var noTouch=Vue.extend(require('../template/vue/noTouch.vue'));
 * 	var temp = new noTouch();
		document.getElementById('app').appendChild(temp.$mount().$el);
		temp.show(transparent); transparent:是否显示蒙层
		temp.hide();
 */
<template>
		<div id="no-touch" v-show="isShow" v-bind:showBg="showBg"></div>
</template>

<script>

module.exports={
	name:'mz-notouch',
	methods:{
		show:function(transparent){
			if(transparent){
				this.showBg = transparent;
			}
			this.isShow=true;
		},
		hide:function(){
			this.showBg=false;
			this.isShow=false;
		}
	},
	data:function(){
			return {
				showBg:false,
				isShow:false
			};
		},
	props:{
	},
};
</script>

<style scoped lang="sass">
#no-touch{
	left:0;top:0;
  position:absolute;
  background:transparent;
  opacity:.5;
  width:100%;height:100%;
  z-index:280;
  display:block;
}
#no-touch[showBg]{
	background:black;
}
#no-touch[show]{
  display:block;
}
</style>