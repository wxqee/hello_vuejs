/**
 * Created by xiaoqiang on 30/03/2017.
 */
// todo: try to change global.currentView in browser console
var global = {
  currentView: 'one'
};

new Vue({
  el: '#root',
  data: {
    state: global
  },
  components: {
    'one': { template: '#one' },
    'two': { template: '#two' },
    'three': { template: '#three' }
  }
});

