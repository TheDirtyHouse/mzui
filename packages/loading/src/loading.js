'use strict';
import Vue from 'vue';
import LoadingComponent from './loading.vue';

const LoadingConstructor = Vue.extend(LoadingComponent);

let getInstance = () => {
  var tar = new LoadingConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(tar.$el);
  return tar;
};


export default getInstance();
