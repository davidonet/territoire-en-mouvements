// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import global from "./assets/paths"
import BootstrapVue from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/facebook";
import "vue-awesome/icons/twitter";
import "vue-awesome/icons/whatsapp";
import shortid from "shortid";
import axios from "axios";
Vue.component("icon", Icon);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App
  },
  data() {
    return {
      localID: shortid.generate(),
      paths: global.paths
    }
  },
  created() {
    axios.post("https://gelf.david-o.net/gelf", {
      "short_message": "Welcome",
      "level": "tem",
      "host": this.$root.localID,
      "page": "welcome",
      "appCodeName": navigator.appCodeName,
      "appVersion": navigator.appVersion,
      "userAgent": navigator.userAgent,
      "platform": navigator.platform,
      "width": document.documentElement.clientWidth,
      "height": document.documentElement.clientHeight
    })
  }
})
