
<template>

		<transition 
		v-bind:appear="config.appear"
		v-bind:name="config.transName" 
		v-on:after-leave="afterTransLeave" 
		v-on:after-enter="afterTransEnter">
			<slot></slot>
		</transition>

</template>

<script>

export default{
	name:'mz-view',
	methods:{
		afterTransLeave:function(e){
			if(this.config.afterTransLeave)this.config.afterTransLeave(e);
		},
		afterTransEnter:function(e){
			if(this.config.afterTransEnter)this.config.afterTransEnter(e);
		}
	},
	data:function(){
			return {};
		},
	mounted:function(){console.log("vue mounted mzView");},
	components:{},
	props:{
		config:{
			default:{
				appear:false,
				afterTransLeave:null,
				afterTransEnter:null,
				transName:"normal",
			},
			type:Object
		},
	},
};
</script>

<style scoped lang="sass">
</style>