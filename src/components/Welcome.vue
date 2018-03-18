<template>
<div class="welcome">
  <div v-if="isMobile" class="row bottom">
    <div class="col-12 text-center">
      <span class="text-warning">Vous êtes sur un mobile, accès direct à la </span><br/><br/>
      <b-button variant="outline-success" to="/list">liste des parcours</b-button>

    </div>
  </div>

  <div v-if="!isMobile" class='embed-container'><iframe src='https://player.vimeo.com/video/259659920?color=00FF80' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
  <img v-if="isMobile" :src="'/static/img/head.jpg'"></img>
  <div class="tem-text">
    <h2>Territoire en Mouvements</h2>
    <p>Une collection de balades urbaines constituée entre 2016 et 2019 offre à chaque commune de la Métropole de Montpellier une œuvre sonore originale. Une expérience artistique et sensorielle dont vous êtes l’acteur et le spectateur en mouvement.<br/>      Les parcours sont accessibles en ligne gratuitement et en permanence depuis votre smartphone.<br/> <b>Chaussez votre casque et laissez-vous guider !</b>
    </p>
  </div>
  <img :src="'/static/img/img0.jpg'"></img>
  <div class="tem-text">
    <p>L’occasion de (re)découvrir le territoire à travers le regard singulier de l’artiste Patrice Barthès. Les parcours sont nourris de recherches, de rencontres et contributions d’habitants, d’architectes, d’urbanistes, d’historiens, de paysagistes…<br/>Un
      compositeur, différent pour chaque balade, est invité à créer un univers sonore et musical.</p>
  </div>
  <img :src="'/static/img/img2.jpg'"></img>
  <div class="tem-text">
    <p>En révélant les espaces, les réalités, les richesses et le patrimoine des 31 communes, la collection fait apparaître un maillage géo-poétique de ce territoire administratif récemment constitué. Une invitation à une nouvelle perception des espaces
      traversés.
    </p>
  </div>
  <img :src="'/static/img/img4.jpg'"></img>
  <div class="tem-text">
    <h2><a target="_blank" href="http://patricebarthesartiste.com/">Patrice Barthès</a> : chorégraphe et plasticien.</h2> Patrice Barthès créé des œuvres sensibles qui déplacent le regard du spectateur hors de ses repères, en usant de dispositifs qui ré-interrogent notre rapport à l’environnement, son actualité et ses représentations.</p>
  </div>
  <img :src="'/static/img/img3.jpg'"></img>
  <div class="tem-text">
    <h2><a target="_blank" href="http://www.latelline.org/">L’Atelline</a> : lieu d’activation art et espace public / Atelier de Fabrique Artistique</h2>
    <p>L’Atelline accompagne depuis plus de 10 ans dans leurs démarches et leurs projets de création des artistes qui choisissent l’espace public comme terrain de questionnement, d’expérimentation, de représentation, de rencontre. Elle est implantée depuis
      l’origine dans la métropole montpelliéraine tout en intervenant à l’échelle régionale et nationale dans le cadre de nombreux partenariats. Elle produit et accompagne la mise en oeuvre de Territoire en Mouvements.
    </p>
    <div class="row">
      <div class="col-md-4 text-center">
        <img style="width:60%" src="/static/logo/atelline.png"></img>
      </div>
      <div class="col-md-4 text-center">
        <a target="_blank" href="http://www.latelline.org/">www.latelline.org</a><br/><a href="mailto:contact@latelline.org">contact@latelline.org</a>
      </div>
      <div class="col-md-4 text-center">
        04 99 54 69 07<br/> 3 rue de la Cour du recteur, Montpellier
      </div>
    </div>
  </div>
  <mapbox v-if="!isMobile" @map-click="mapClicked" @map-touch="mapClicked" access-token="pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg" :map-options="{
  style: 'mapbox://styles/davidonet/cj3sji7kk001g2smog1w1oohw',
  center: [3.8999597,43.6056334],
  zoom: 10,
  interactive:false
}" :nav-control="{show:false}"></mapbox>
</div>
</template>
<style scoped>
#map {
  width: 100%;
  height: 600px;
  cursor: pointer;
}

img {
  width: 100%;
}

p {
  text-align: left;
}

h1,
h2 {
  margin-bottom: 0.5em;
  color: #00FF80;
}

.welcome {
  overflow-x: hidden;
}

.bottom {
  margin-bottom: 2em;
  margin-top: 2em;
}

.tem-text {
  margin-top: 2em;
  margin-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
}

.embed-container {
  position: relative;
  padding-top: 5%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
import Mapbox from "mapbox-gl-vue"

export default {
  name: "welcome",
  components: {
    "mapbox": Mapbox
  },
  data() {
    return {}
  },
  methods: {
    mapClicked(map, e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["tem"]
      });

      if (!features.length) {
        return;
      }
      const feature = features[0];
      this.$router.push("/play/" + feature.properties.id)
    }
  },
  computed: {
    isMobile: function() {
      return (document.documentElement.clientWidth < 720);
    }
  }
}
</script>
