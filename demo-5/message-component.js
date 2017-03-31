/**
 * Created by xiaoqiang on 30/03/2017.
 */

// try to modify who.name from command line

Vue.component('message-list', {
  template: '#message-list-tpl',
  data: function() {
    return {
      messages: []
    };
  },
  methods: {
    pushMessage: function (newMessage) {
      this.messages.push(newMessage);
    },
    clearMessages: function () {
      this.messages = [];
    }
  }
});

Vue.component('message-item', {
  props: ['text', 'index'],
  template: '#message-item-tpl',
  data: function () {
    return {
      show: true
    }
  },
  mounted: function() {
    // remove message after 2 seconds
    setTimeout(function() {
      this.show = false;
    }.bind(this), 2000);
  }
});

var app = new Vue({
  el: '#root',
  mounted: function () {
    var messageList = this.$refs.messageList;

    // demo
    var index = 0;
    var data = ["one", "two", "three", "four", "five"];
    var it = setInterval(function() {
      messageList.pushMessage(data[index++]);

      if (index == 3) {
        messageList.clearMessages();
        console.log(messageList.messages);
        clearInterval(it);
      }
    }, 2000)

  }
});
