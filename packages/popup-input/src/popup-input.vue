
/**
样式属性
	v-bind:btn-loading="btnLoading"	控制按钮是否为loading状态
	v-bind:btn-disabled="btnDisabled"	控制按钮是否为disabled状态

数据属性
	show:true	显示开关[true/false]
	title:"弹出框的标题""
	btnName:"提交按钮的文案"
	maxlength:"30"	最大可输入长度
	placeholder:"空白情况下提示文字"
	tip-right:"输入框右下角提示文字"

正则表达验证数据
	pattern:"/^[0-9]{3}$/"	验证数据的正则表达式
	error-msg:"输入的数据错误"	当正则验证错误的时候，提示的文字信息
	need-length:"3"	当输入多少字符开始，才触发验证正则表达式
	trace:"input"	触发验证的事件[change, input, blur, keyup]
	
图形验证码
	type:"normal"	输入框的类型[normal:普通,imgcode:图形验证码的验证框]
	img-src:图形验证码的图片（base64/url）

事件属性
	v-on:btnok="btnOk":绑定点击提交按钮事件对象 触发事件时会将input内的内容带出来
	v-on:btnclose="btnClose":绑定点击关闭按钮事件对象 触发事件时会将input内的内容带出来
	v-on:onblur="onBlur":当输入框失焦后触发
	v-on:btnimgcode="btnImgCode":绑定点击图片验证码区域后，触发的事件
	v-on:ontips="btnOnTips":点击右下角的帮助
	v-on:onfocus="onFocus":当输入框获得焦后触发
	

ref可调用方法
	setValue(value):设置输入框的值
	showTips(msg,type):msg:消息文字,type:["normal","error"]默认error
*/
<template>
		<transition name="mask" enter-active-class="">
			<hgroup id="pop-bg" v-show="show" class="flex-row flex-main-center flex-cross-center">

				<transition name="mask" >
					<section id="mask" v-show="show"></section>
				</transition>

				<transition name="alert">
					
					<section id="pop-box" v-show="show" class="flex-col flex-main-center flex-cross-center">
						<i v-on:click="btnClose" class="group-close" :mz-mon-click="mzMonClickClose">
							<svg id="icon-close" viewBox="0 0 10 10" width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.1" stroke="#C1ABAB">
								<line x1="1" y1="1" x2="8" y2="8"/>
								<line x1="1" y1="8" x2="8" y2="1"/>
							</svg>
						</i>

						<hgroup class="group-title flex-col flex-main-start flex-cross-center">
							<p id="title">{{title}}</p>
						</hgroup>

						<hgroup class="group-input flex-auto flex-col flex-cross-center">
							<div id="imgCode" v-on:click="handleClickImgCode" :mz-mon-click="mzMonClickImgCode" v-show="type==='imgcode'"><img :src="imgSrc" /></div>
							<div v-show="type==='normal'" style="height:20px;width:100%;"></div>
							<mz-input
								ref="inputref"
								:type="inputType"
								v-on:input="onInput" 
								v-model="inputvalue" 
								:pattern="pattern" 
								:error-msg="errorMsg" 
								:placeholder="placeholder" 
								:maxlength="maxlength" 
								:trace="trace" 
								:need-length="needLength"
								v-on:onpattern="onPattern" 
								v-on:onblur="onBlur" 
								v-on:onfocus="onFocus"
								:tip-right="tipRight" 
								v-on:clicktips="onTips"
								:mz-mon-input="mzMonInput"
								>
							</mz-input>
						</hgroup>
						<hgroup class="group-btn">	
							<mz-button v-on:onclick="handleClick" :btn-disabled="inputvalue.length<=0||(pattern&&!patternPass)||btnDisabled" :btn-loading="btnLoading" :mz-mon-click="mzMonClickOk">{{btnName}}</mz-button>
						</hgroup>
					</section>

				</transition>
			</hgroup>
		</transition>
	
</template>

<script>
import vueButton from '../../button/src/button.js';
import vueInput from '../../input/src/input.js';

export default {
	name:'mz-pop-input',
	methods:{
		onTips:function(){
			this.$emit('ontips', e);
		},
		setValue:function(value){
			this.inputvalue=value;
		},
		onPattern:function(isPass){
			console.log("onPattern:"+isPass);
			this.patternPass = isPass;
		},
		onFocus:function(e){
			this.$emit('onfocus',e,this.inputvalue);
		},
		onBlur:function(e){
			this.$emit('onblur',e,this.inputvalue);
		},
		handleClickImgCode:function(e){
			this.$emit('btnimgcode', e);
		},
		handleClick:function(e){
			this.$emit('btnok', e,this.inputvalue);
		},
		onInput:function(val){
			//this.$emit('input',val);
		},
		btnClose:function(e){
			this.$emit('btnclose', e,this.inputvalue);
		},
		showTips:function(msg,type){
			this.$refs.inputref.showTips(msg,type); 
		}
	},
	computed:{
		mzMonClickOk:function(){
	    return this.mzMonInput.length > 0 ? this.mzMonInput+"-btn-ok":"";
	  },
		mzMonClickClose:function(){
	    return this.mzMonInput.length > 0 ? this.mzMonInput+"-btn-close":"";
	  },
	  mzMonClickImgCode:function(){
	    return this.mzMonInput.length > 0 ? this.mzMonInput+"-btn-imgcode":"";
	  }
	},
	components:{
      mzButton: vueButton,
      mzInput: vueInput,
	},
	data:function(){
			return {
				patternPass:false,
				inputvalue:"",
				show2:false,
			};
		},
	props:{

		title:{default:"标题",type:String},
		placeholder:{default:"提示信息",type:String},
		maxlength:{default:"30",type:String},
		errorMsg:{default:"",type:String},
		pattern:{default:"",type:String},
		needLength:{default:"",type:String},
		trace:{default:"text",type:String},
		btnDisabled:{default:false,type:Boolean},
		btnLoading:{default:false,type:Boolean},
		// inputvalue:{default:"",type:String},
		imgSrc:{default:"",type:String},
		type:{default:"normal",type:String},
		btnName:{default:"name",type:String},
		show:{default:false,type:Boolean},
		tipRight: String,  //输入框右下侧的提示信息
		mzMonInput:{type:String,default:''},
		inputType:{default:"text",type:String},
		
	},
};
</script>

<style scoped lang="sass">
$colorTitlePop:#616161;
$maskAlpha:.7;
#mask{
	left:0;top:0;
  position:absolute;
  background:rgba(0,0,0,$maskAlpha);
  width:100%;height:100%;
  z-index:101;
  display:block;
}
#imgCode{
	margin-top:16px;
	width:120px;
	height:34px;
	img{
		width:100%;
		height:100%;
	}
}
#pop-bg{
	position:absolute;
	left:0;top:0;
	width:100%;
	height:100%;
	z-index:100;
	padding:0 16px;
	
	#pop-box{
		.group-close{
			position: absolute;right:14px;top:18px;z-index:103;
		}
		.group-title{
			padding-top:15px;
			width:100%;
			height:40px;
			#title{
				font-size:1.28rem;
				color:$colorTitlePop;
			}
		}
		.group-input{
			width:100%;
		}
		.group-btn{
			width:100%;
			height:61px;
			padding:0 49px;
		}
		border-radius:6px;
		box-shadow: 0 0 24px rgba(0, 0, 255, .22), 0px 24px 24px rgba(0, 0, 0, .3);
		width:100%;
		max-width:343px;
		min-height:228px;
		background: white;
		z-index:102;
		
	}

}


.mask-enter-active {
  -webkit-animation: mask-in .3s ease;
}
.mask-leave-active {
   -webkit-animation: mask-out .3s ease;
}
.mask-leave {
  opacity:1;
}

@keyframes mask-in {
  0% {
  	opacity:0;
  }
  100% {
    opacity:1;
  }
}


@keyframes mask-out {
  0% {
  	opacity:1;
  }
  100% {
  	opacity:0;
  }
}


.alert-enter-active {
  -webkit-animation: alert-in .3s ease;
}
.alert-leave-active {
   -webkit-animation: alert-out .3s ease;
}
.alert-leave {
  opacity:1;
}

@keyframes alert-in {
  0% {
  	opacity:0;
    -webkit-transform: translate3d(0,20px,0);
  }
  100% {
  	opacity:1;
    -webkit-transform: translate3d(0,0,0);
  }
}


@keyframes alert-out {
  0% {
  	opacity:1;
  }
  100% {
  	opacity:0;
  }
}

</style>