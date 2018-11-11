

<template>
	<div id="log-group" v-bind:open="open!==0" v-if="isdebug">
		<section id="log-btn" @click="btnOpen">
			日志{{open===0?"":open}}
		</section>
		<section id="log-content" v-bind:notouch="open===2">
			<hgroup id="log-menu">
				<div id="log-btn-clear" @click="btnClear">清除</div>
			</hgroup>
			<p v-for="log in list" v-html="'['+log.time+']:'+log.txt">
				
			</p>
		</section>
	</div>

</template>

<script>
export default {
  data () {
    return {
    	isdebug:false,
    	open:0,
    	list:[],
    }
  },
  mounted(){

    this.pushLog(location.href,"warn");
    this.pushLog(navigator.userAgent,"error");
  },
  methods:{
  	btnClear:function(){
  		this.list=[];
  	},
  	btnOpen:function(){
  		this.open++;
  		if(this.open===3){this.open=0;}
  	},
    pushLog:function(txt,color){
      let tm = new Date();
      let time = tm.getHours()+":"+tm.getMinutes() +":"+ tm.getMilliseconds();
      if(color){
        switch(color){
          case 'net':{txt = "<span style='color:#31bf45;'>" + txt + "</span>";}break;
          case 'system':{txt = "<span style='color:#eca637;'>" + txt + "</span>";}break;
          case 'error':{
            txt = "<span style='color:yellow;'>" + txt + "</span>";
          }break;
          default:{
            txt = "<span>" + txt + "</span>";
          }break;
        }
        
      }
      this.list.unshift({txt:txt,time:time});
    },
  	write:function(txt,color){
  		if(!this.isdebug  )return;
      this.pushLog(txt,color);
  	}
  }
}
</script>

<style lang="scss">
@import "../../common_scss/mixin";
#log-group{
	position: absolute;
	z-index: 146;
	left:0;top:0;
  width:100%;
}
#log-content[notouch]{
	pointer-events: none;
	opacity: .6;
}
#log-content{
  display: none;
	padding-top:pxToRem(40);
	position: absolute;
	left:0;
	top:pxToRem(56);
	background: rgba(10,0,0,.9);
	width:100%;height:pxToRem(360);
	overflow: scroll;
  -webkit-overflow-scrolling: touch;
  p{
    @include fontPxToRem(14);
  	color:white;
  	white-space:nowrap;
  	line-height:pxToRem(30);
  	div,p,span{font-size:inherit;line-height:pxToRem(17);color:white;}

  }
}

#log-group[open]{
  #log-content{
    display: block;
  }
}

#log-menu{
	position: absolute;
	left:0;
	top:0;
	padding:pxToRem(2) pxToRem(2);
	width:100%;height:pxToRem(35);
	border-bottom:1px solid white;
}
#log-btn-clear{

	border:2px solid white;
	width:pxToRem(80);
  height:pxToRem(30);
	text-align: center;
  line-height:pxToRem(28);
  color:white;
  float: left;
  margin-right:pxToRem(10);
}
#log-btn{
	position: absolute;
  top: pxToRem(9.8);
  left: pxToRem(70);
  color:red;
  background: rgba(255,255,255,.8);
  width:pxToRem(40);
  height:pxToRem(30);
  border-radius: 100%;
  text-align: center;
  
  @include fontPxToRem(14);
  line-height:pxToRem(28);
  border:1px solid red;
  opacity: .8;
}
</style>
