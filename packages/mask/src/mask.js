'use strict';
import Vue from 'vue';
import component from './mask.vue';
let mask = null;

function show(transparent){
	if(!mask){
		mask=new (Vue.extend(component))();
		document.getElementById('app').appendChild(mask.$mount().$el);
	}
	mask.show(transparent);
}
function hide(){
	if(!mask){
		mask=new (Vue.extend(component))();
		document.getElementById('app').appendChild(mask.$mount().$el);
	}

	mask.hide();
}

export default {
	show:show,
	hide:hide
};