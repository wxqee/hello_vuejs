/**
 * Created by xiaoqiang on 30/03/2017.
 */

Vue.component('one', {
  props: ['user'],
  template: '#one'
});


Vue.component('two', {
  template: '#two',
  data: function () {
    return {
      foo: 'bar'
    };
  }
});


Vue.component('three', {
  template: '#three',
  computed: {
    dateTime: function() {
      return new Date().toLocaleDateString();
    }
  }
});


Vue.component('four', {
  template: '#four'
});


new Vue({
  el: '#root',
  template: '#app'
});
