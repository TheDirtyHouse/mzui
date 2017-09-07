<template>
 <transition name="fade">
  <div v-show="shown" class="actionSheet-mask" @click="closeOnClickModal">  
   <transition>
      <div class="flex-col address" :class="options.className">
                            <div class="toorbar bg-white flex-row flex-main-between color-gray f16">
                                <div @click="btnCancel">{{options.cancelText}}</div>
                                <div>{{options.title}}</div>
                                <div class="color-blue" @click="btnSure">{{options.sureText}}</div>
                            </div>
                            <div class="flex-row pickerContent">
                                <picker :listData="provinceList" v-model="province"></picker>
                                <picker :listData="cityList" type="line" v-model="city"></picker>
                            </div>
                        </div>
      </transition>
  </div>
 </transition >
</template>
<script>
import picker from './picker.vue'
import dataAddress from './address.js'

export default {
   name: 'address-picker',

  data() {
      return {
        shown: false,
        options: {
          title: "选择城市",
          cancelText:"取消",
          sureText:"确认",
        },
        province:  [],
        city:[],
        provinceList:dataAddress.area,
        cityList: [
        {
          "areaCode": "",
          "parentCode": "",
          "areaName": "",
          "level":""
        }

      ],
      }
    },
    computed: {
      cityList:function  () {     
        return this.province;
      }
    },
    watch:{
        province: function(val, oldVal) {
                   this.cityList = val.city;
                   this.city = this.cityList[0];
                },
    },
    methods:{
      setOpts: function(opts){
        switch(typeof opts){
          case 'string':
            this.options.title = opts;
            break;
          case 'object':
            Object.assign(this.options, opts);
            break;      
        }
      },
      show:function(opts){
       this.shown = true; 
       this.setOpts (opts);  
      },
      hide:function(opts){
       this.shown = false; 
      },

      btnCancel: function() {
       var action=this.options.btnCancel;
        action(this.province,this.city);
        this.shown=false;

      },
      btnSure: function() {
        var action=this.options.btnSure;
        action(this.province,this.city);
        this.shown=false;

      },
        closeOnClickModal: function(e) {

        var target=e.target.className;
         if(target=='actionSheet-mask'){
          this.shown=false;
         }

      },
    },

  components: {
      picker,
    }
};
</script>


<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.flex-row{
   display: -webkit-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction:row;
}
.flex-main-between {
     -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    
    -moz-flex-pack: space-between;
    -ms-flex-pack: space-between;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
}
/**
 * 主轴为竖向排列的
 */
.flex-col {
   display: -webkit-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.address {
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
    z-index: 300;
    background:#fff;
    height:200px
}
.actionSheet-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(0,0,0,.7) ;
  z-index: 140;


}
.pickerContent{
  height:200px
}
.toast {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width:95%;
  opacity:1;
  transform: translate3d(-50%,0, 0);
  border-radius: 4px;
  background: #EFEDED;
  color: #000;
  box-sizing: border-box;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.action div{
  color:#009ae8;
  font-size:18px;
  border-top:1px solid #DDD;
  background-color:#fff;
  padding:17px 0px;
}
.cancel{
  color:#c1abab;
  font-size:16px;
  border-top:1px solid #DDD;
  background-color:#fff;
  padding:17px 0px;
  margin-top: 10px;
}
.toast-top {
  top: 44px;
  left: 50%;
  transform: translate3d(-50%, 20px, 0);
}

.v-enter {
  transform: translate3d(-50%, 200px, 0);
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
    transform: translate3d(-50%, 250px, 0);
}
.v-leave{
    transform: translate3d(-50%, 10px, 0);
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
  font-size: 14px;
  text-align: middle;
  color:#9B9B9B;
  padding:7px 0px 
}
.toast-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid;
  vertical-align: middle;
}
.toorbar {
    height: 56px;
    line-height: 56px;
    padding: 0px 16px;
    width:100%
}
</style>
