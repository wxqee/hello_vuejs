/**
 * Created by xiaoqiang on 30/03/2017.
 */

// try to modify who.name from command line
Vue.component('say-hi', {
  props: ['name', 'index'],
  template: '#say-hi'
});

new Vue({
  el: '#root',
  data: {
    users: ["robin", "alex", "wendy"]
  }
});
