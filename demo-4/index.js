/**
 * Created by xiaoqiang on 30/03/2017.
 */

var message = {
  users: []
};

Vue.component('message-from', {
  template: '#message-from',
  data: function () {
    return {
      user: ''
    };
  },
  watch: {
    user: {
      handler: _.debounce(function (newValue) {
        message.users.push(newValue);
      }, 1500),
      deep: true
    }
  }
});

Vue.component('message-to', {
  template: '#message-to',
  data: function () {
    return message;
  }
});

new Vue({
  el: '#root',
  data: message
});

