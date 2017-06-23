<template>
<div id="app">
  <b-navbar toggleable type="inverse" variant="inverse" class="fixed-top">

    <b-nav-toggle target="nav_collapse_1"></b-nav-toggle>

<router-link to="/" class="navbar-brand" style="color:#00FF80;">Territoire en mouvements</router-link>

    <b-collapse is-nav id="nav_collapse_1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/list" class="nav-link">Les parcours</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/partner">Les partenaires</router-link>
        </li>
      </ul>
      <span class="navbar-text">Prochain inauguration : <b>Lavérune le 17 juin 2017 à 10:00</b></span>
    </b-collapse>

  </b-navbar>
      <router-view></router-view>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app'
}
</script>

<style>
b{
  color:#fff;
}
body{
  padding-top: 54px;
}
</style>
