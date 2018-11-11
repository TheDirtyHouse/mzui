<template>
 <transition name="fade">
  <div v-show="shown" class="messagebox-mask" :class="className" @click="handleMaskClose()">
  <transition >
      <div v-show="shown" class="toast" :class="messageClass" >
       <div class="title " v-show="showTitle" v-html="title"></div>
       <div v-show="showDelete" @click="handleClose" class="flex-center btn-close" >
         <div class="delete"></div>
       </div>
      <div class="message" v-html="message">
      </div>   
       <div class="btn-group flex-center" v-show="showCancelButton || showConfirmButton">
         <div class="cancel flex-auto"  v-show="showCancelButton" @click="handleCancel">{{cancelButtonText}}</div>
         <div class="sure flex-auto"   v-show="showConfirmButton" @click="handleConfirm" >{{confirmButtonText}}</div>
      </div> 
      </div>
      </transition>
  </div>
  </transition>
</template>
<style scoped lang="scss">
@import "../../common_scss/mixin";
.messagebox-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:rgba(0,0,0,0.7);
  z-index: 145;
}
.btn-close{
  position: absolute;
  right:pxToRem(2);
  top:pxToRem(2);
  width:pxToRem(40);
  height:pxToRem(40);
  z-index:1;
}
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 80%;
  border-radius: pxToRem(6);
  background: #fff;

  text-align: center;
  overflow: hidden;
  color:#757575;
  @include fontPxToRem(18);
  box-shadow: 0 0 pxToRem(15) rgb(0,0,0); 
}


.delete{
  width:pxToRem(14);height:pxToRem(2);
  background:#BDBDBD; 
  -webkit-transform: rotate(45deg);
}
.delete:after{
  position:absolute;
  left:0;top:0;
  content:"";
  width:pxToRem(14);height:pxToRem(2);
  background:#BDBDBD; 
  -webkit-transform: rotate(90deg);
}


.title{
   margin:pxToRem(16);
   color:#757575;

}
.message{
margin:pxToRem(14) 0px pxToRem(20);
padding:0px pxToRem(20);
word-break: break-all;

}
.sure{
  color:#009ae8;
   padding:pxToRem(17) 0px;
  // border-top:1px solid #eee;
  // padding:17px 0px;
}
.cancel{
 border-right:1px solid #eee;
  padding:pxToRem(17) 0px;
}
.btn-group{
   border-top:1px solid #eee; 
}
.v-enter{
     opacity: 0;
     transform: translate3d(-50%, -40%, 0);
}
.v-enter-active{
     transition: all .3s ;
}

.v-leave-to{
    opacity: 0;
     transform: translate3d(-50%, -50%, 0);
}
.v-leave{
   transform: translate3d(-50%, -40%, 0);
}
.v-leave-active{   
     transition: all .3s ;
}




.fade-enter{
    background-color:rgba(0,0,0,0) ;
}
.fade-enter-active{
     transition: all .3s ;
}

.fade-leave-to{
    background-color:rgba(0,0,0,0) ;
}
.fade-leave{
    background-color:rgba(0,0,0,.7) ;
}
.fade-leave-active{   
     transition: all .3s ;
}

</style>
<script>
export default {

  data() {
      return {
        shown: false,
        showTitle:true,

        confirmButtonText:'',
        cancelButtonText:'',
        title:'',
        messageClass:'',
        message:'',

        showDelete:false,
        showCancelButton:false,
        showConfirmButton:false,
        btnOk:null,
        btnCancel:null,
        btnClose:null,
        btnMaskClose:null,
        className:'',

      };
    },
     methods: {  
      hide:function(){
         this.shown=false;
       },
        show:function(){
         this.shown=true;
      },
        handleCancel: function (event) { 
          console.log('confirmEvent');
          if(this.btnCancel){
              this.hide();
              this.btnCancel();
          }else{
            this.shown=false;
          }
        },
         handleConfirm: function (event) { 
          console.log('confirmEvent');
          if(this.btnOk){
            this.hide();
            this.btnOk();
          }else{
            this.shown=false;
          }
        },
        handleClose:function(){
          if(this.btnClose){
            this.hide();
            this.btnClose();
          }else{
            this.shown=false;
          }
        },
       handleMaskClose:function () {
          var obj = event.srcElement ? event.srcElement : event.target;
          if(obj.className=="messagebox-mask"){
            if(this.maskClose=='1'){
              if(this.btnMaskClose){
                this.hide();
                this.btnMaskClose();
              }else{
                this.shown=false;
              }
            }else{
              return;
            }
          }else{
            return;
          }

       }
      },
    props: {
  
    },

    computed: {
    
    }

};
</script>
