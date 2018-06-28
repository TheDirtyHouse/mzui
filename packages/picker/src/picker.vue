<template>

  <div class="mzui-picker">
  
    <div class="mzui-picker-data" style="overflow: hidden;">
      <div id="mzuiPickerDataList" class="flex-col flex-center" style="" >
        <p v-for="item in listData">{{item.text}}</p>
      </div>
    </div>
    

    <div class="mzui-picker-mask flex-col flex-center">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>

</template>
<script>
let finger={
  sy:0,
  start_time:0,
  cy:0,
  lastTime:0,
  tpY:0,
  state:"",   
};

module.exports = {
   name: 'mz-picker',
    data () {
      return {
        listData:[],
        domList:null,
        
      }
    },
    props: {
    },
    computed: {
    },
    mounted () {
      for( var i = 0 ; i < 30 ; i++ ){
        this.listData.push({
          text:""+i+":data",
        });
      }
      finger.max_y = -(this.listData.length-1)*45;
      finger.min_y = 0;
      let dom = document.getElementById('mzuiPickerDataList');
      this.domList = dom;

      if( "ontouchstart" in window){
        dom.addEventListener('touchstart', this.touchStart)
        dom.addEventListener('touchmove', this.touchMove)
        dom.addEventListener('touchend', this.touchEnd)
      }else{
        dom.addEventListener('mousedown', this.touchStart)
        dom.addEventListener('mousemove', this.touchMove)
        dom.addEventListener('mouseup', this.touchEnd)
        dom.addEventListener('mouseout', this.touchEnd)
      }
      
    },
    methods: {
      touchStart:function(e){
        let temp=e;
        if(e.changedTouches)temp = e.changedTouches[0];
         
        let self=this;
        finger.state = 'down';
        finger.sy=temp.pageY;
        finger.start_time = e.timestamp || Date.now();
        e.preventDefault();
      },
      touchMove:function(e){
        let temp=e;
        if(e.changedTouches)temp = e.changedTouches[0];
        if( finger.state !== 'down')return;
        finger.cy=temp.pageY;
        finger.last_time = e.timestamp || Date.now();
        this.update();
        e.preventDefault();
      },
      touchEnd:function(e){
        let temp=e;
        if(e.changedTouches)temp = e.changedTouches[0];
        if(  finger.state !== "down")return;
        finger.state = "up";
        finger.cy=temp.pageY;
        finger.last_time = e.timestamp || Date.now();
        
        this.update('end');
        e.preventDefault();
      },
      toIndex:function(index){

      },
      update:function(type){
        
        let domList= this.domList;
        let now = Date.now();     
        let y = finger.tpY + (finger.cy - finger.sy);

        let power_move = Math.abs(finger.cy-finger.sy) / (finger.last_time - finger.start_time)*60;//惯性缓动
        let toward =-1;//1:手指向上，-1:手指向下

        //手指向上滑动
        if( finger.cy < finger.sy ){
          toward=1;
          power_move = -power_move;
        }

        //如果是touch结束，则保存最后坐标值，并且启动缓动效果
        if( type && type === 'end'){
          finger.start_time = finger.lastTime = finger.cy = finger.sy = 0;
          y += power_move;
          if( y%45 != 0 ){
            if( y < 0){
              y = parseInt(y/45-toward)*45;
            }else{
              y = parseInt(y/45+toward)*45;
            }
          }
          domList.style.webkitTransition=`transform 1000ms cubic-bezier(0.19, 1, 0.22, 1)`;
        }else{
          domList.style.webkitTransition='';
        }

        y = y > finger.min_y?finger.min_y:y;
        y = y < finger.max_y?finger.max_y:y;

        if( type && type === 'end'){
          finger.tpY = y;
        }
        domList.style.webkitTransform=`translateY(${y}px)`;
      }

    }
  }
  
</script>
<style scoped lang="scss">
  
.mzui-picker{
  background:#f5f5f5;
  width:100%;
  height:180px;

}
.mzui-picker-data{
  width:100%;height:100%;
  -webkit-mask:-webkit-linear-gradient(top, rgba(0,0,0,0) 0%,#fff 40%,#fff 60%,rgba(0,0,0,0) 100%);
  div p{
    line-height:45px;
  }

}

.mzui-picker-mask{
  pointer-events:none;
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  div{
    width:100%;
    height:67.5px;
  }
   div:nth-child(2){
    height:45px;
    opacity: 1;
    border:1px solid rgba(204,204,204,.5);
    border-left:0;
    border-right:0;
  }
}

#mzuiPickerDataList{
  margin-top:67.5px;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

</style>