/**
 * Created by xiaoqiang on 30/03/2017.
 */

new Vue({
  el: '#root',
  template: '#app',
  components: {
    'one': {
      props: ['user'],
      template: '#one'
    },
    'two': {
      template: '#two',
      data: function () {
        return {
          foo: 'bar'
        };
      }
    },
    'three': {
      template: '#three',
      computed: {
        dateTime: function() {
          return new Date().toLocaleDateString();
        }
      }
    },
    'four': {
      template: '#four'
    }
  }
});
