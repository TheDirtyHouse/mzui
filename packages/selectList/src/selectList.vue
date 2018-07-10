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
$imgRoot: '../../../resource/';
p{
  font-size:20/14+rem;
  color:Red;
}
.item-right{
  width:100%;
  height:100%;
  border-bottom: 1px solid #e0e0e0;
  margin-left: 8px;
}
  .icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 16px;
 
    &.icon-selected {
      background-size: 14px 10px!important;
      background: url(#{$imgRoot}icon-selected.png) no-repeat center center;
    }
  }

.logo{
  background: rgba(216, 216, 216, 1);
  margin-right: 16px
}

.carItem{
  height: 64px;
  padding:0px 16px;

}
</style>