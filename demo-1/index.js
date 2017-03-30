/**
 * Created by xiaoqiang on 30/03/2017.
 */

// try to modify who.name from command line
var who = {
  name: 'Robin Wang'
};

new Vue({
  el: '#root',
  template: '#hello-world',
  data: {
    who: who
  }
});
