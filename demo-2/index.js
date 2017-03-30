/**
 * Created by xiaoqiang on 30/03/2017.
 */
var data = {
  username: 'Robin Wang'
};

var sayHi = Vue.component('say-hi', {
  props: ['who', 'message'],
  template: '#say-hi'
});

new Vue({
  el: '#root',
  template: '#app',
  data: data
});
