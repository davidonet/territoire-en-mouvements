<template>
<div id="app">
  <b-navbar toggleable type="inverse" class="fixed-top" style="background-color:#292b2c">

    <b-nav-toggle target="nav_collapse_1"></b-nav-toggle>

    <router-link to="/" class="navbar-brand" v-b-toggle.nav_collapse_1 style="color:#00FF80;"><img src="/static/icon/tem.svg" height="32px"></img> Territoire en mouvements</router-link>

    <b-collapse is-nav id="nav_collapse_1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a target="_blank" href="https://www.facebook.com/TerritoireEnMouvements/">
            <icon scale="2" color="grey" name="facebook"></icon>
          </a>
        </li>
        <li class="nav-item">
          <a target="_blank" href="https://twitter.com/l_atelline">
            <icon scale="2" color="grey" name="twitter"></icon>
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list" v-b-toggle.nav_collapse_1>Les parcours</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/partner" v-b-toggle.nav_collapse_1>Les partenaires</router-link>
        </li>
      </ul>
      <span class="nav-link">Prochaine inauguration : <b>{{next}}</b></span>
    </b-collapse>

  </b-navbar>
  <router-view></router-view>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";

export default {
  name: "app",
  components: {},
  data() {
    return {
      next: ""
    }
  },
  created: function() {
    axios.get("https://gist.githubusercontent.com/davidonet/7ad04382207b84de7e9934c236f657ea/raw/tem_next.json").then(res => {
      this.next = res.data.next;
    });
  }
}
</script>

<style>
b {
  color: #fff;
}

body {
  padding-top: 54px;
}

a {
  color: #00FF80;
}

a:hover {
  color: #00FF80;
  text-decoration: none;
  font-weight: bold;
}

svg:hover {
  color: #ddd;
}
</style>
