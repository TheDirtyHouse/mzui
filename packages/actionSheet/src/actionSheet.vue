<template>
 <transition name="fade">
  <div v-show="shown" class="actionSheet-mask" @click="closeOnClickModal">  
   <transition>
      <div v-show="shown"   class="toast" :class="toastClass">
   
        <div class="title" v-html="title"></div>
        <div class="action"  v-for="(item, index) in actions">
          <div class="" @click.stop="handleAction(index)" v-html="item.text"></div>
          <!-- <div class="">{{item.action}}</div> -->
        </div>
        <div class="cancel" @click.stop="shown=!shown" v-html="cancelText" v-if='cancelText!=""'></div>
      </div>
      </transition>
  </div>
 </transition >
</template>
<style scoped lang="scss">
@import "../../common_scss/mixin";
.actionSheet-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(0,0,0,.7) ;
  z-index: 140;
  min-height:pxToRem(480);
}

.toast {
  position: absolute;
  left: 50%;
  bottom: pxToRem(10);
  width:95%;
  opacity:1;
  transform: translate3d(-50%,0, 0);
  border-radius: pxToRem(4);
  background: #EFEDED;
  color: #000;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.action div{
  color:#009ae8;
  @include fontPxToRem(18);
  border-top:1px solid #DDD;
  background-color:#fff;
  padding:pxToRem(17) 0px;
}
.cancel{
  color:#c1abab;
  @include fontPxToRem(16);
  border-top:1px solid #DDD;
  background-color:#fff;
  padding:pxToRem(17) 0px;
  margin-top: pxToRem(10);
}
.toast-top {
  top: pxToRem(44);
  left: 50%;
  transform: translate3d(-50%, pxToRem(20), 0);
}

.v-enter {
  transform: translate3d(-50%, pxToRem(200), 0);
}

.v-enter-active {
  transition: all .3s ;
}
.fade-enter{
    background-color:rgba(0,0,0,0) ;
}
.fade-enter-active{
     transition: all .3s ;
}


.v-leave-to{
    transform: translate3d(-50%, pxToRem(250), 0);
}
.v-leave{
    transform: translate3d(-50%, pxToRem(10), 0);
}
.v-leave-active{   
     transition: all .3s ease;
}


.fade-leave-to{
    background-color:rgba(0,0,0,0) ;
}
.fade-leave{
    background-color:rgba(0,0,0,.7) ;
}
.fade-leave-active{   
     transition: all .3s ease;
}


.title{
  background-color:#fff;
  @include fontPxToRem(14);
  text-align: middle;
  color:#9B9B9B;
  padding:pxToRem(7) 0px 
}
.toast-icon {
  display: inline-block;
  width: pxToRem(20);
  height: pxToRem(20);
  border: 1px solid;
  vertical-align: middle;
}

</style>
<script>
export default {

  data() {
      return {
        shown: false,
        title:'描述说明',
        cancelText:'取消',
      // actions:Array,

        // handleCancel:null,
      }
    },
    methods:{

      handleCancel: function() {
        this.shown = false;      
      },
      handleAction: function(index) {
        var action=this.actions[index].action;
        action();
        this.shown=false;

      },
        closeOnClickModal: function(e) {

        var target=e.target.className;
         if(target=='actionSheet-mask'){
          this.shown=false;
         }

      },
    },
    props: {
      actions:{
        type:Object
      },
      toastClass: {
        type: String,
        default: ''
      },
    },

};
</script>
