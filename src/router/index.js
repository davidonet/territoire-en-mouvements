import Vue from "vue"
import Router from "vue-router"
import Welcome from "@/components/Welcome"
import List from "@/components/List"
import Play from "@/components/Play"
import Partner from "@/components/Partner"
import Player from "@/components/Player"

Vue.use(Router)

export default new Router({
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
    path: "/",
    component: Welcome
  }, {
    path: "/partner",
    component: Partner
  }, {
    path: "/list",
    component: List
  }, {
    path: "/play/:town?",
    component: Play
  }, {
    path: "/player/:town?",
    component: Player
  }]
})
