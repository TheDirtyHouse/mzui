'use strict';
import Vue from 'vue';
import mzLog from './logSystem.vue';


const mzLogSystem = Vue.extend(mzLog);
var logSystem = new mzLogSystem({
  el: document.createElement('div')
});
document.body.appendChild(logSystem.$el);
logSystem.isdebug=true;


export default logSystem;
