/** * 使用方法 
* 标签 mz-keyboard 
样式属性
  v-bind:has-enter="true" 是否有确认键
  v-bind:key-type="." 特殊字符，可支持：".", "x"

数据属性
  callkeyboard:true 显示开关[true/false]

事件属性
  v-on:inputnum="inputNum":点击键盘 触发事件时会将输入的内容带出
  v-on:delnum="delNum":点击删除键 触发事件时会将事件带出

*/

<template>
  <transition name="up">  
    <section id="keyboard" class="flex-row keyboard" style="display:none;" v-show="callkeyboard">
      <div class="flex-auto number">
        <ul class="flex-row">
          <li v-for="n in 3" class="flex-auto" @click="onClick(n)">{{n}}</li>
        </ul>
        <ul class="flex-row" :class="{'second': !hasEnter}">
          <li v-for="n in [4,5,6]" class="flex-auto" @click="onClick(n)">{{n}}</li>
        </ul>
        <ul class="flex-row">
          <li v-for="n in [7,8,9]" class="flex-auto" @click="onClick(n)">{{n}}</li>
        </ul>
        <ul class="flex-row">
          <li class="flex-auto">{{configKey}}</li>
          <li class="flex-auto" @click="onClick(0)">0</li>
          <li class="flex-auto close flex-row flex-main-center flex-cross-center" @click="delNum($event)">
            <div class="icon-close" v-if="!hasEnter">
              <svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" stroke="#fff">
                <line x1="0" y1="0" x2="10" y2="10" stroke-width="2"/>
                <line x1="0" y1="10" x2="10" y2="0" stroke-width="2"/>
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <ul class="right flex-col flex-main-center flex-cross-center" v-if="hasEnter">
        <li class="close flex-auto flex-row flex-main-center flex-cross-center" @click="delNum($event)">
          <div class="icon-close">
            <svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" stroke="#fff">
              <line x1="0" y1="0" x2="10" y2="10" stroke-width="2"/>
              <line x1="0" y1="10" x2="10" y2="0" stroke-width="2"/>
            </svg>
          </div>
        </li>
        <li class="flex-auto flex-row flex-main-center flex-cross-center"><button type="button">确定</button></li>
      </ul>
    </section>
  </transition>  
</template>
<script>
module.exports = {
  name: 'mz-keyboard',
  data() {
    var configKey = '';
    switch(this.keyType){
      case 'point':
        configKey = '.';
      break;
      case 'x':
        configKey = 'X';
      break; 
      default:
        configKey = '';
      break;  
    }
    return {
      configKey: configKey
    };
  },
  props: {
    hasEnter: {
      type: Boolean,
      default: false
    },
    keyType: {
      type: String,
      default: 'no'
    },
    callkeyboard: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick: function(n){
      this.$emit('inputnum', n);
    },
    delNum: function(event){
      this.$emit('delnum', event);
    }
  }
};
</script>
<style scoped lang="sass">
  li{
    font-size: 24px;
    text-align: center;
  }
  button{
    background: none;
    border: none;
  }
  .keyboard{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 500;
  }
  .number{
    ul{
      width: 100%;
      height: 54px;
      border-bottom: 1px solid #bdc3c7;
      &:last-child{
        border-bottom: none;
      }
      li{
        border-right: 1px solid #bdc3c7;
        width: 33%;
        line-height: 53px;
        color: rgba(52, 73, 94, 1);
        &:last-child{
          border-right: none;
        }
      }
    }
    .second{
      li:nth-child(2){
        background-color: #eee;
      }
    }
    .close{
      line-height: normal;
    }
  }
  .right{
    width:25.6%;
    text-align: center;
    li{
      width: 100%;
      height: 50%;
    }
    .close{
      border: 1px solid #bdc3c7;
      border-bottom-color: #2196f3;
      background-color: #fbfbfb;
    }
    button{
      font: inherit;
      background-color: #2196f3;
      color: #fff;
      width: 100%;
      height: 100%;
    }
  }
  .icon-close{
    position: relative;
    width: 20px;
    background-color: rgba(#37484e, .7);
    border-radius: 0 2px 2px 0; 
    &:before{
      content: '';
      position: absolute;
      left: -8px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 8px solid rgba(#37484e, .7);
    }
  }
  .up-enter-active {
    animation: upin .3s ease;
    -webkit-animation: upin .3s ease;
  }
  .up-leave-active {
    animation: upout .3s ease;
    -webkit-animation: upout .3s ease;
  }
  @-webkit-keyframes upin {
    0% {
      opacity: 0;
      transform: translate3d(0, 216px, 0);
      -webkit-transform: translate3d(0, 216px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
  }
  @-webkit-keyframes upout {
    0% {
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 216px, 0);
      -webkit-transform: translate3d(0, 216px, 0);
    }
  }

</style>
