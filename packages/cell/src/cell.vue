/**
 * 样式属性
 * 无
 * 事件属性
 * v-on:onclick="btnOk":设置按钮点击的监听对象
 * 插槽
 * header、title、end、footer分别代表4个位置的内容
 */
<template>
		<div v-on:click="handleClick" class="cell flex-row flex-main-center flex-cross-center">
			<div class="icon-box flex-col flex-main-center">
				<slot name="header"></slot>
			</div>
			<div class="title-box flex-auto flex-col flex-main-center">
				<slot name="title"></slot>
			</div>
			<div class="footer-box flex-col flex-main-center">
				<slot name="end"></slot>
			</div>
			<div class="end-box flex-col flex-main-center">
				<slot name="footer"></slot>
			</div>
		</div>			
</template>

<script>
module.exports={
	name:'mz-cell',
	methods:{
		handleClick:function(e){
			this.$emit('onclick', e);
		},
	},
	data:function(){
			return {
			};
		},
	props:{
	},
};
</script>

<style scoped lang="sass">
$colorTitle:#424242;
$colorBorderLine:rgba(238,238,238,.5);


.cell{
	background:white;
	height:64px;
	width:100%;
	padding:0 16px;

	.icon-box{
		height:100%;
		padding-right:16px;
	}

	.title-box{
		height:100%;
		font-size:1.14rem;
		color:$colorTitle;
	}
	.end-box{
		height:100%;
		padding-right:9px;
	}
	.footer-box{
		height:100%;
	}
}



.cell{
	.title-box,.end-box,.footer-box{
		border-bottom:1px solid $colorBorderLine;
	}
}

.cell:last-child{
	.title-box,.end-box,.footer-box{
		border-bottom:0;
	}
}
</style>