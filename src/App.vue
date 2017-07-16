<template>
<div id="app">
  <b-navbar toggleable type="inverse" variant="inverse" class="fixed-top">

    <b-nav-toggle target="nav_collapse_1"></b-nav-toggle>

    <router-link to="/" class="navbar-brand" v-b-toggle.nav_collapse_1 style="color:#00FF80;"><img src="/static/icon/tem.svg" height="32px"></img> Territoire en mouvements</router-link>

    <b-collapse is-nav id="nav_collapse_1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <social-sharing url="http://territoire-en-mouvements.fr"
            title="Territoire en mouvements"
            description="Une collection de balades urbaines constituée entre 2016 et 2019 offrira à chaque commune de la Métropole de Montpellier, une œuvre sonore originale. Une expérience artistique et sensorielle dont vous êtes l’acteur et le spectateur en mouvement. Les parcours sont accessibles en ligne gratuitement et en permanence depuis votre smartphone."
            quote="Chaussez votre casque et laissez-vous guider !"
            twitter-user="l_atelline"
            hashtags="montpellier3m,TerritoireEnMouvements"
          inline-template>
            <div>
              <network network="facebook">
                <icon scale="2" color="grey" name="facebook"></icon>
              </network>
              <network scale="2" network="twitter">
                <icon scale="2" color="grey" name="twitter"></icon>
              </network>
            </div>
          </social-sharing>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list" v-b-toggle.nav_collapse_1>Les parcours</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/partner" v-b-toggle.nav_collapse_1>Les partenaires</router-link>
        </li>
      </ul>
      <span class="navbar-text">Prochain inauguration : <b>En septembre</b></span>
    </b-collapse>

  </b-navbar>
  <router-view></router-view>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import SocialSharing from "vue-social-sharing";

export default {
  name: "app",
  components: {
    SocialSharing
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
</style>
