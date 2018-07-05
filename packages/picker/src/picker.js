'use strict';
import component from './picker.vue';

// export default component;

const mzCom = Vue.extend(component);
var mzComponent = new mzCom({
  el: document.createElement('div')
});
document.body.appendChild(mzComponent.$el);


export default mzComponent;

