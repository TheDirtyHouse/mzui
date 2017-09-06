'use strict';
import Vue from 'vue';
import AddressPicker from './address-picker.vue';

const AddressPickerConstructor = Vue.extend(AddressPicker);

let getInstance = () => {
  var tar = new AddressPickerConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(tar.$el);
  return tar;
};


export default getInstance();
