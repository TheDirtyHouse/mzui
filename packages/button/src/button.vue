/**
 * 样式属性
 * btn-color:指定配色方案	可选值:blue、pink
 * btn-style:按钮类型
 * 事件属性
 * v-bind:btn-Disabled="myBtnDisabled":绑定控制按钮disabled的属性
 * v-bind:btn-loading="btnLoading":绑定控制按钮是否为loading状态的属性
 * v-on:onclick="btnOk":设置按钮点击的监听对象
 */
<template>
		<button 
			v-bind:mz-mon-click="mzMonClick"
			v-on:click="handleClick" 
			v-bind:btnColor="btnColor" 
			v-bind:btnStyle="btnStyle" 
			v-bind:loading="btnLoading" 
			v-bind:disabled="btnDisabled"
		>
			
			<p v-show="!btnLoading"><slot></slot></p>
			
			<div v-show="btnLoading">
				<img class="btn-loading" src="../../../resource/loading-white.svg">
 			</div>

		</button>
</template>

<script>
module.exports={
	name:'mz-button',
	methods:{
		handleClick:function(e){
			this.$emit('onclick', e);
		},
	},
	data:function(){
			return {
			};
		},
	props:{
		btnDisabled:{default:false,type:Boolean},
		btnColor:{default:"",type:String},
		btnStyle:{default:"",type:String},
		btnLoading:{default:false,type:Boolean},
		mzMonClick:{default:"",type:String},
	},
};
</script>

<style scoped lang="sass">
@import "../../common_scss/mixin";

$btnColor:rgb(255,99,97);
$btnColorLoading:#ccc;
$btnColorDisabled:#ccc;
$btnHeight:44;

.btn-loading{

	width:pxToRem(30);
	height:pxToRem(30);
	display:inline-block;
}

button[loading]{
	opacity:.5;
}

button[disabled]{
	opacity:.5;
}
button{
	text-align: center;
	line-height:0;
	background: $btnColor;
	background:  -webkit-linear-gradient(right, rgb(255,99,97), rgb(255,160,109)); 
	box-shadow: 0 pxToRem(4) pxToRem(9) rgba(255,81,99,.3);

	border-radius:pxToRem($btnHeight/2);
	width:100%;
	height:pxToRem($btnHeight);
	p{
		@include fontPxToRem(18);
		color:white;
	}
}



button[btnColor="blue"][loading]{
	background:#f00;
}

button[btnColor="blue"][disabled]{
	background:#0f0;
}
button[btnColor="blue"]{
	background:#00f;
}

button[btnStyle="rect"]{
	border-radius: 0;
}
button[btnStyle="hollow"]{
	border:1px solid #ff6361;
	background:transparent;
	p{
		color:#ff6361;
		@include fontPxToRem(18);
	}
}

</style>