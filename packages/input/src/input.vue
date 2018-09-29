/** * 使用方法 
* 标签 mz-input 

1、属性：

显示属性
label='XXX': 带标题的输入框，该值可传入标题
wrap='XXX': 换行显示标识，可接受任何值
type='text': input标签的type值，支持：tel、text等 
placeholder='XXX': input标签的placeholder值 
class='margin-small XXX': 自定义类名 默认：两边留白24px margin-small为16px
tip-msg="XXX": 输入框左下侧的提示信息，可利用showTips方法动态修改该值
tip-right="XXX": 输入框右下侧的提示信息，可利用showTips方法动态修改该值
:disabled="true":是否禁止输入
:select-btn="true":是否显示右侧选择箭头（结合disabled可以将Input变成一个选择框)

校验属性
maxlength='XXX': input的maxlength值 
pattern='XXX': 需要校验的正则 
trace='XXX': 校验的时机(必须与pattern同时存在) 支持：input, blur, keyup 
error-msg='XXX': 正则校验的错误提示信息 
need-length='XXX': tace='input'即输完校验该需求下的长度要求 

input特殊属性
:focused='true/false' 是否需要自动聚焦
:disabled='true/false' 是否禁止修改

数据绑定
v-model='XXX': 值绑定（必传，否则无法绑定值）
ref='name': 父组件调用子组件方法, name相当于该组件的别名（详细可看下方例子）


注意：除了v-model,每个值都可以是变量，可以用v-bind:属性名=“变量”来动态设置属性值

2、slot
插入右侧dom, 建议设置宽度或者最大宽度，否则input宽度会受影响

3、方法
showTips('XXXX'/{left: "XXX", right: "XXX"}, 'normal'/'error')  
clearTips() 强制清除输入框下方提示
v-on:onpattern: 校验完指定的正则返回给父组件的事件，第一个参数为校验结果true/false
v-on:onblur: 获取输入框失焦状态（给父组件监听失焦事件）
v-on:onfocus: 获取输入框聚焦状态（给父组件监听失焦事件）
v-on:clicktips: 点击输入框右下侧提示信息
v-on:click: 当用户点击输入框区域时触发

eg:
mz-input 
  type="tel"
  placeholder="电话号码"
  label="电话"
  v-model="phone"
  pattern="/1[345789]\d{9}$/"
  error-msg="手机号出错"
  trace="input"
  need-length="11"
  maxlength="11"
  ref="inputName"
  :select-btn="true"
  :disabled="true"
/mz-input

*/

<template>
  <section :class="{'nolabel':!label,'tip-noauto-toggle':autoToggleTip}">
    <div class="field">
      <div class="border flex-row flex-cross-center" :class="{'no-bottom-line':noBottomLine===true}">
        <label for="" v-if="label" v-html="label"></label>
        <div class="flex-auto" v-on:click="handleClick" v-bind:mz-mon-click="mzMonClick">
          <textarea v-if="wrap"
            :value="value" 
            @input="onInput($event.target.value)">
          </textarea>
          <input v-if="!wrap"
            :type="innerType" 
            :placeholder="placeholder" 
            :maxlength="maxlength" 
            :value="value" 
            @input="onInput($event.target.value)" 
            @blur="onblur($event)"
            @keyup="onkeyUp($event.target.value)"
            @focus="onfocus($event)"
            v-focus="focused"
            :disabled="disabled"
            :mz-mon-input="mzMonInput"
          >
          <div class="icons flex-row flex-cross-center">
            <i class="icon icon-click" v-if="selectBtn"></i>
            <i class="icon icon-clear" v-if="!wrap && isFocused && value" @click="clear()"></i>
            <i class="icon icon-eye" 
              :class="{'icon-eye-close': innerType != 'password'}" 
              v-if="isPassword" 
              @click="toggleType()">
            </i>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <transition>
      <div class="tips flex-row  flex-cross-center" :class="{'flex-main-end': !tipContent, 'flex-main-between': tipContent}" v-if="tipContent || tipright">
        
          <div class="flex-row flex-auto" :class="{'tip-normal':tipType == 'normal', 'tip-label':label && tipContent}" v-if="tipContent">
            <i v-if="tipType == 'error' && tipContent">!</i>
            <p class="flex-auto msg">{{tipContent}}</p>
          </div>
        
        <p class="tips-right" @click="clickTips" :mz-mon-click="mzMonInputTips" v-if="tipright">{{tipright}}</p>
      </div>
    </transition>
  </section>
</template>
<script>
module.exports = {
  name: 'mz-input',
  data() {
    return {
      isPassword: this.type == 'password' ? true : false,
      innerType: this.type,
      tipContent: this.tipMsg || '',
      isFocused: this.focused,
      tipType: 'normal',
      tipright: this.tipRight || '',
    };
  },
  directives: {
    focus: {
      inserted: function(el, binding) {
        if (binding.value) {
          el.focus();
        }
      },
      componentUpdated: function(el, binding) {
        if (binding.modifiers.lazy) {
          if (Boolean(binding.value) === Boolean(binding.oldValue)) {
            return;
          }
        }
        if (binding.value) {
          el.focus();
        }
      },
    }
  },
  props: {
    wrap: String, //textArea
    label: String, //输入框之前的标题
    type: { //input的type
      type: String,
      default: 'text'
    },
    placeholder: String,
    maxlength: {
      type: String,
      default: '50'
    },
    errorMsg: String, //值正则校验——错误提示
    pattern: String, //值正则校验——正则
    trace: String, //值正则校验——触发点
    needLength: String, //值正则校验——输完即校验的长度
    focused: Boolean, //是否自动聚焦
    disabled: Boolean, //是否不可输入
    required: String, //是否必填
    value: String,  //用于v-model绑定输入的值
    tipMsg: String,  //输入框左下侧的提示信息
    tipRight: String,  //输入框右下侧的提示信息
    mzMonInput:{type:String,default:''},
    canRequired:{type:Boolean,default:false},
    selectBtn:{type:Boolean,default:false},//是否显示右侧的选择按钮
    noBottomLine:{type:Boolean,default:false},//是否不显示下划线
    autoToggleTip:{type:Boolean,default:false},//是否关闭自动伸缩的TIP
  },
  watch: {
    value: function(val, oldVal) {
      var self = this;
      if(this.pattern && this.trace == 'input'){
        if (val.length >= self.needLength) {
          this.validateInput(this.pattern, val);
        } else {
          this.$emit('onpattern', false);
        }
      }
    }
  },
  computed:{
    mzMonInputTips:function(){
      return this.mzMonInput.length > 0 ? this.mzMonInput+"-rightTip":"";
    },
    mzMonClick:function(){
      return this.mzMonInput.length > 0 ? this.mzMonInput+"-click":"";
    }
  },
  methods: {
    handleClick:function(e){
      this.$emit('onclick', e);
    },
    showTips: function(msg, type) {
      this.tipType = type || 'error';
      switch(typeof msg){
        case 'string':
          this.tipContent = msg;
          break;
        case 'object':
          if(msg.left){
            this.tipContent = msg.left;
          }
          if(msg.right){
            this.tipright = msg.right;
          }
          break;
      }
    },
    clearTips: function(){
      this.tipContent = '';
      this.tipright = '';
    },
    clickTips: function(e){
      this.$emit('clicktips', e);
    },
    onInput: function(value) {
      this.isFocused = true;

      //不允许一个不可见字符都没有
      if(/\S+/.test(value)===false && this.canRequired === false){
        value = value.replace(/\s/g,"");
      }
      this.$emit('input', value);
      if(this.tipContent && value.length < this.value.length){
        this.tipContent = '';
      }
    },
    clear: function() {
      this.$emit('input', '');
      this.tipContent = '';
    },
    toggleType: function() {
      this.innerType = (this.innerType == 'password' ? 'text' : 'password');
    },
    validateInput: function(pattern, value){
      pattern = eval(this.pattern);
      if(pattern.test(value)){
        this.$emit('onpattern', true);
      } else {
        this.tipType = 'error';
        this.tipContent = this.errorMsg;
        this.$emit('onpattern', false);
      }
    },
    onblur: function(e) {
      var self=this;
      //由于删除ICON是在isFocused为true才显示，而当isFocused为false的时候则不会触发click事件，所以这里做一帧延迟
      setTimeout(function(){
        self.isFocused = false;
      },100);
      
      if (this.trace == 'blur' && this.pattern) {
        this.validateInput(this.pattern, e.target.value);
      }
      this.$emit('onblur', e);
    },
    onkeyUp: function(value){
      if (this.trace == 'keyup' && this.pattern) {
        this.validateInput(this.pattern, value);
      }
    },
    onfocus: function(e){
      this.isFocused = true;
      this.$emit('onfocus', e);
    }
  }
};
</script>

<style scoped lang="sass">
$errorColor: #dd191d;
$imgRoot: '../../../resource/';
$gray: #f3f0f0;
i {
  font-style: normal;
}
section{
  width: 100%;
}
@keyframes errorIn{
  0%{
    opacity: 0;
    max-height: 0;
  }
  100%{
    opacity: 1;
    max-height: 1000px;
  }
}
@keyframes errorOut{
  0%{
    opacity: 1;
    max-height: 1000px;
  }
  100%{
    opacity: 0;
    max-height: 0;
  }
}
.border{
  border-bottom: 1px solid #eee;
}
.field {
  color: #424242;
  padding: 0 24px;
  background: #fff;
  .border{
    width: 100%;
    min-height: 56px;
    padding: 12px 0;
  }
  textarea, input {
    width: 100%;
    line-height: 30px;
    font-size: 1.14rem;
  }
  .icons{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
  }
  .icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 16px;
    background-size: auto 100% !important;
    &.icon-clear {
      background: url(#{$imgRoot}icon-input.png) no-repeat 0px 0px;
    }
    &.icon-eye {
      background: url(#{$imgRoot}icon-input.png) no-repeat -53px 0px;
      
    }
    &.icon-eye-close {
      background: url(#{$imgRoot}icon-input.png) no-repeat -26px 0px;
    }
    &.icon-click {
      margin:0;
      padding:0;
      width:.6rem;
      height:.6rem;
      border-bottom: 1px solid #ccc;
      border-left: 1px solid #ccc;
      transform: rotateZ(315deg);
      margin-top: -0.3rem;
      margin-left:-0.3rem;
    }
  }
}
label {
  width: 6+16/14+rem;
  text-align: left;
  line-height: 32px;
  font-size: 1.14rem;
}
.v-enter-active{
  animation: errorIn .3s ease;
  -webkit-animation: errorIn .3s ease;
}
.v-leave-active{
  animation: errorOut .3s ease;
  -webkit-animation: errorOut .3s ease;
}
.tips {
  font-size: 1rem;
  line-height: 16px;
  color: $errorColor;
  padding: 14px 24px;
  &.flex-main-between{
    background-color: $gray;
    &::before {
      position: absolute;
      top: -7px;
      left: 16px;
      content: '';
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid $gray;
    }
  }
  >.flex-row{
    color: inherit;
    font-size: inherit;
    .msg {
      padding-left: 4px;
      color: inherit;
      font-size: inherit;
    }
  }
  .tip-normal{
    color: #757575;
  }
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
}
.nolabel{
  padding-bottom: 44px;
  .tips{
    position: absolute;
    width: 100%;
    padding: 14px 24px;
    &.flex-main-between{
      background-color: #fff;
      &::before{
        display: none;
      }
    }
    >.flex-row{
      padding: 0;
    }
  }
}

.tip-noauto-toggle{
  padding-bottom: 0px;
  .tips{
    position: relative;
  }
}
.tips-right{
  font-size: .86rem;
  color: #757575;
  text-align: right;
  min-width: 50px;
}
.margin-small{
  .field{
    padding: 0 16px;
  }
  .tips{
    padding: 14px 16px;
    &.flex-main-between{
      &::before {
        left: 10px;
      }
    }
  }
}
.no-bottom-line{
  border-bottom: 0;
}
</style>
