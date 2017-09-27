
/**
样式属性
	v-bind:btn-loading="btnLoading"	控制按钮是否为loading状态
	v-bind:btn-disabled="btnDisabled"	控制按钮是否为disabled状态

数据属性
	show:true	显示开关[true/false]
	title:"弹出框的标题"
	subtitle:"标题下方提示"
	reset-tips: "提示旁边重新操作可点击文案"
	btn-name:"提交按钮的文案"
	input-length: "6" 输入内容的长度
	input-type: "password" 输入内容的显示方式为点或数字，支持"number"、"password"
	error-msg: "错误提示"

事件属性
	v-on:btnok="btnOk":绑定点击提交按钮事件对象 触发事件时会将input内的内容带出来
	v-on:btnclose="btnClose":绑定点击关闭按钮事件对象 触发事件时会将input内的内容带出来	

ref可调用方法
	showTips(msg) 错误提示
*/
<template>
	<transition name="mask" enter-active-class="">
		<hgroup id="pop-bg" v-show="show" class="flex-row flex-main-center flex-cross-center">
			<transition name="mask" >
				<section id="mask" v-show="show"></section>
			</transition>
			<transition name="alert">
				<section id="pop-box" v-show="show" class="flex-col flex-main-center flex-cross-center">
					<i v-on:click="btnClose" class="group-close">
						<svg id="icon-close" viewBox="0 0 10 10" width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.1" stroke="#C1ABAB">
							<line x1="1" y1="1" x2="8" y2="8"/>
							<line x1="1" y1="8" x2="8" y2="1"/>
						</svg>
					</i>
					<hgroup class="group-title flex-col flex-main-start flex-cross-center">
						<p class="title">{{title}}</p>
					</hgroup>
					<hgroup class="group-subtitle flex-row flex-main-center flex-cross-center">
						<p class="subtitle">{{subtitle}}</p>
						<i class="reset" @click="reset()">{{resetTips}}</i>
					</hgroup>
					<hgroup class="group-input flex-auto flex-col">
						<ul class="flex-auto flex-row flex-cross-center" @click="onInput()">
							<li v-for="n in +inputLength" class="flex-auto">
								<span class="input" :class="{'active': active == n - 1}">
									{{(inputType=="password" && inputvalue[n-1]) ? "●" : inputvalue[n-1]}}
								</span>
							</li>
						</ul>
						<transition name="error">
			        <div class="tips flex-row flex-auto" v-if="tipContent">
			          <i>!</i>
			          <p class="flex-auto msg">{{tipContent}}</p>
			        </div>
			      </transition>
					</hgroup>
					<hgroup class="group-btn">	
						<mz-button v-on:onclick="handleClick" :btn-disabled="inputvalue.length < inputLength || btnDisabled" :btn-loading="btnLoading">{{btnName}}</mz-button>
					</hgroup>
				</section>
			</transition>
			<mz-keyboard :callkeyboard="callkey" @inputnum="inputNum" @delnum="delNum"></mz-keyboard>
		</hgroup>
	</transition>
</template>

<script>
import vueButton from '../../button/src/button.js';
import vueInput from '../../input/src/input.js';
import vueKeyboard from '../../keyboard/src/keyboard.js';

export default {
	name:'mz-pop-input-password',
	data:function(){
		return {
			inputvalue: [],
			active: -1,
			callkey: false,
			tipContent:''
		};
	},
	methods:{
		showTips:function(msg){
			switch(typeof msg){
        case 'string':
          this.tipContent = msg;
       	break;
        case 'object':
        	this.tipContent = msg.message;
        break;
      }
      this.active = this.inputvalue.length - 1;
		},
		handleClick:function(e){
			this.active = -1;
			var value = this.inputvalue.join('');
			this.$emit('btnok', e, value);
		},
		onInput: function(){
			var self = this;
			if(this.callkey){
				return;
			}
			this.callkey = true;
			this.active = 0;
			setTimeout(function(){
				var popDom=document.getElementById('pop-box');
				var keyboard = document.getElementById('keyboard');

				var popBottom = self.getOffsetTop(popDom) + popDom.offsetHeight;
				var keyboradBottom = keyboard.offsetTop;
				var offsetY = popBottom - keyboradBottom;

				if(offsetY > 0) {
					var trans = self.offsetTransformY(popDom, -(offsetY + 10), 'px');
					popDom.style.webkitTransform = trans;
					popDom.style.transition = "-webkit-transform .3s"
				}
			}, 0);
		},
		btnClose:function(e){
			this.callkey = false;
			this.$emit('btnclose', e,this.inputvalue);
		},
		inputNum: function(value){
			var length = this.inputvalue.length
			if(length >= this.inputLength){
				this.active = length - 1;
			} else {
				this.inputvalue.push(value);
				if(this.active < (this.inputLength -1)){
					this.active = this.inputvalue.length;
				}
			}
		},
		delNum: function(e){
			this.tipContent = '';
			var finish = this.inputLength - 1;
			if(this.active == finish && this.inputvalue[finish]){
				this.inputvalue.pop();
				return;
			} else {
				if(this.active > 0){
					this.inputvalue.pop();
					this.active --;
				} else {
					return;
				}
			}
		},
		getOffsetTop: function(dom){
			var top = dom.offsetTop || 0;
			if(dom.parentNode){
				top += this.getOffsetTop(dom.parentNode);
			}
			return top;
		},
		offsetTransformY: function(dom, offsetY, unit){
			var ret = dom.style.webkitTransform.replace(/\s/,"");

			var pattern = ",{1}([0-9\-.]*)([px%]*),";

			var findY = new RegExp(pattern,"g");
			var replaceY = new RegExp(pattern);
			
			var result = findY.exec(ret);
			var ret = ret;
			var y = 0;
			var unit = unit || "";
			if(result && result[1]){
				y =+ result[1];
				unit = result[2];

			}else{
				ret = "translate3d(0,0,0)";
			}
			y += offsetY;
			y += unit;

			ret = ret.replace(replaceY, (","+y+",") );
			return ret;
		}
	},
	components:{
    mzButton: vueButton,
    mzInput: vueInput,
    mzKeyboard: vueKeyboard
	},
	props:{
		title:{default:"标题",type:String},
		subtitle:{default:"标题下方提示",type:String},
		resetTips:{default:"重置",type:String},
		inputLength:{default:"6",type:String},
		inputType:{default:"number",type:String},
		errorMsg:{default:"",type:String},
		btnDisabled:{default:false,type:Boolean},
		btnLoading:{default:false,type:Boolean},
		btnName:{default:"name",type:String},
		show:{default:false,type:Boolean},
	},
};
</script>

<style scoped lang="sass">
$colorTitlePop:#616161;
$maskAlpha:.7;
$errorColor: #dd191d;
#mask{
	left:0;top:0;
  position:absolute;
  background:rgba(0,0,0,$maskAlpha);
  width:100%;height:100%;
  z-index:101;
  display:block;
}
#pop-bg{
	position:absolute;
	left:0;top:0;
	width:100%;
	height:100%;
	z-index:100;
	padding:0 16px;
	
	#pop-box{
		padding: 15px 24px 0;
		.group-close{
			position: absolute;
			right:14px;
			top:18px;
			z-index:103;
		}
		.group-title{
			width:100%;
			height:40px;
			.title{
				font-size:1.28rem;
				color:$colorTitlePop;
			}
		}
		.group-btn{
			width:100%;
			height:61px;
			//padding:0 49px;
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
.group-input{
	width:100%;
	li{
		position: relative;
		overflow-x: hidden;
		height: 34px;
		border-bottom: 2px solid #d8d8d8;
		margin-right: 5px;
		text-align: center;
		&:last-child{
			margin-right: 0;
		}
		.input{
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: 100%;
			height: 100%;
			font-size: 1.71rem;
			text-align: center;
			&.active{
				&:after{
					content: '';
					display: inline-block;
					position: absolute;
    			top: 3px;
					width: 2px;
					height: 28px;
					background-color: #b7a689;
					animation: blink 1s infinite steps(1, start);
					-webkit-animation: blink 1s infinite steps(1, start);
				}
			}
		}
	}
}
.group-subtitle{
	width: 100%;
	color: #757575;
	.reset{
		color: #009ae8;
		margin-left: 15px;
	}
}
.tips{
	position: absolute;
  bottom: 7px;
  left: 0;
	font-size: 14px;
  line-height: 16px;
  color: $errorColor;
  i {
    display: block;
    width: 12px;
    height: 12px;
    margin-top: 2px;
    background-color: $errorColor;
    color: #fff;
    line-height: 12px;
    border-radius: 50%;
    text-align: center;
  }
  .msg {
    padding-left: 4px;
  }
}
.error-enter-active{
  animation: errorIn .3s ease;
  -webkit-animation: errorIn .3s ease;
}
.error-leave-active{
  animation: errorOut .3s ease;
  -webkit-animation: errorOut .3s ease;
}
@-webkit-keyframes errorIn{
  0%{
    opacity: 0;
    max-height: 0;
  }
  100%{
    opacity: 1;
    max-height: 1000px;
  }
}
@-webkit-keyframes errorOut{
  0%{
    opacity: 1;
    max-height: 1000px;
  }
  100%{
    opacity: 0;
    max-height: 0;
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
@-webkit-keyframes mask-in {
  0% {
  	opacity:0;
  }
  100% {
    opacity:1;
  }
}
@-webkit-keyframes mask-out {
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
@-webkit-keyframes alert-in {
  0% {
  	opacity:0;
    -webkit-transform: translate3d(0,20px,0);
  }
  100% {
  	opacity:1;
    -webkit-transform: translate3d(0,0,0);
  }
}
@-webkit-keyframes alert-out {
  0% {
  	opacity:1;
  }
  100% {
  	opacity:0;
  }
}
@keyframes blink {
  0%, 100% {
    background-color: #ff6261;
  }
  50% {
    background-color: #fff; 
  }
}
@-webkit-keyframes blink {
  0%, 100% {
    background-color: #ff6261;
  }
  50% {
    background-color: #fff; 
  }
}
</style>