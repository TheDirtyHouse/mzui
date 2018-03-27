

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
#log-group{
	position: absolute;
	z-index: 146;
	left:0;top:0;
}
#log-group[open]{
	width:100%;
}
#log-content[notouch]{
	pointer-events: none;
	opacity: .2;
}
#log-content{
	padding-top:40px;
	position: absolute;
	left:0;
	top:4rem;
	background: rgba(10,0,0,.7);
	width:100%;height:360px;
	overflow: scroll;
  -webkit-overflow-scrolling: touch;
  p{
    font-size:14px;
  	color:white;
  	white-space:nowrap;
  	line-height:2.2rem;
  	div,p,span{font-size:inherit;line-height:1.2rem;color:white;}

  }
}
#log-menu{
	position: absolute;
	left:0;
	top:0;
	padding:2px 2px;
	width:100%;height:35px;
	border-bottom:1px solid white;
}
#log-btn-clear{

	border:2px solid white;
	width:80px;height:30px;
	text-align: center;
  line-height:2rem;
  color:white;
  float: left;
  margin-right:10px;
}
#log-btn{
	position: absolute;
  top: .7rem;
  left: 5rem;
  color:red;
  background: rgba(255,255,255,.8);
  width:40px;height:30px;
  border-radius: 100%;
  text-align: center;
  line-height:2rem;
  font-size:1rem;
  border:1px solid red;
  opacity: .8;
}
</style>
