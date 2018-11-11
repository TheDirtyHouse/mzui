<template>
    <div class="flex-col" >
      <div v-for="(item, index) in lists" class="carItem flex-row  flex-cross-center" @click="handleClick(arguments[0],index)">
      <i class="sprite scale-half" :class="`${item.dataCode}`"></i>
      <div class="item-right flex-row flex-main-between flex-cross-center">
          <span :class="{'color-red ': showIcon==index}">{{item.dataValue}}</span>
          <i class="icon" :class="{'icon-selected': showIcon==index}" ></i>
      </div>
    
      </div>
    </div>
</template>
<script>
module.exports={
  name:'select-list',
  methods:{
    handleClick:function(e,index){
      this.showIcon=index;
      this.$emit('clickitem',index,e);
    },
  },
  data:function(){
    return {
      showIcon:-1

    }
   
  },
  props:{
    lists: {
      type: Array,
    },
  }
};
</script>

<style scoped lang="sass">
@import "../../common_scss/mixin";
$imgRoot: '../../../resource/';
p{
  @include fontPxToRem(20);
  color:Red;
}
.item-right{
  width:100%;
  height:100%;
  border-bottom: 1px solid #e0e0e0;
  margin-left: pxToRem(8);
}
  .icon {
    display: block;
    width: pxToRem(24);
    height: pxToRem(24);
    margin-left: pxToRem(16);
 
    &.icon-selected {
      background-size: pxToRem(14) pxToRem(10) !important;
      background: url(#{$imgRoot}icon-selected.png) no-repeat center center;
    }
  }

.logo{
  background: rgba(216, 216, 216, 1);
  margin-right: pxToRem(16)
}

.carItem{
  height: pxToRem(64);
  padding:0px pxToRem(16);

}
</style>