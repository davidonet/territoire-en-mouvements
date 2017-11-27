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
import VueAnalytics from "vue-analytics";
import axios from "axios";

Vue.component("icon", Icon);
Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: "UA-75194409-2",
  router
});

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
    let that = this;
    axios.get("https://api.mapbox.com/datasets/v1/davidonet/cj3sj2ayk001956pmle6pozz3/features?access_token=pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg").then((ret) => {
      that.mbpaths = ret.data;
    });
    return {
      paths: global.paths,
      mbpaths: {}
    };
  }
});
