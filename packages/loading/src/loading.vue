<template>
	<section class="mask flex-row flex-main-center flex-cross-center" :class="options.className" v-show='showTimes'>
		<div class='pop flex-col flex-main-center flex-cross-center'>
			<svg id="svg-loading" x="0px" y="0px" viewBox="0 0 150 150" width="0.3rem" height="0.3rem">
    		<circle id="svg-loading-inner" cx="75" cy="75" r="60" border="10px"/>
 			</svg>
			<span class='text'>{{options.text}}</span>
		</div>
	</section>
</template>
<script>
	var isShowLog = true;
	module.exports = {
		data() { 
			return {
				showTimes: 0,
				options: {
					text: "加载中",
					className: "",
				}
			};
		},
		methods: {
			setOpts: function(opts){
				switch(typeof opts){
					case 'string':
						this.options.text = opts;
						break;
					case 'object':
						if(Object.assign){Object.assign(this.options, opts);}
						else{
							for( var key in opts ){
								this.options[key] = opts[key];
							}
						}
						
						break;			
				}
			},
			set: function(opts, closeLog){
				this.setOpts(opts);
				isShowLog = closeLog ? false : true;
			},
			show: function (opts, log) {
				if(isShowLog && log){
					console.log('showTimes:' + this.showTimes + ',' + log);
				}
				this.setOpts(opts);
				if(this.showTimes++ > 0){
					return;
				}
			},
			hide: function(force, log){
				if(isShowLog && log){
					console.log('showTimes:' + this.showTimes + ',' + log);
				}
				if(force){
					this.showTimes = 0;
					return;
				}
				if(this.showTimes <= 0){
					return;
				}
				this.showTimes--;
			}
		}
	};
</script>
<style scoped lang="scss">
@import "../../common_scss/mixin";

@keyframes svg-loading {
	0% { 
    transform: rotateZ(0); 
  }
	100% { 
    transform: rotateZ(360deg);
  }
}
@keyframes svg-loading-circle {
		0% { 
      stroke-dashoffset: 0
    }
		100% { 
      stroke-dashoffset: -600;
    }
}



	#svg-loading {
    animation: svg-loading 2s linear infinite;
    #svg-loading-inner {
		  stroke: {
        dashoffset: 0;
        dasharray: 300;
        width: 20;
        miterlimit: 10;
        linecap: round;
      }
      animation: svg-loading-circle 3s linear infinite;
      stroke: rgba(255,255,255,.7);
      fill: transparent;
    }
	}
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		right:0;
		bottom:0;
		z-index: 200;
		.pop{
			min-width: pxToRem(160);
			min-height: pxToRem(115);
			max-width: 66%;
			background-color: rgba(#000, .52);
			border-radius: pxToRem(8);
		}
		.text{
			color: #fff;
			@include fontPxToRem(14);
			padding: pxToRem(16) 0 0;
		}
	}
	.loading-full{
		.pop{
			background-color: transparent;
		}
		#svg-loading {
			#svg-loading-inner {
	      stroke: rgba(0,0,0,.5);
	    }
		}
		.text{
			color: #000;
		}
	}
</style>