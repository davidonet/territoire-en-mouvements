<template>
<div class="welcome">
  <img :src="'/static/img/w1.jpg'"></img>
  <div class="tem-text">
    <h2>Territoire en Mouvements : un projet transversal </h2>
    <p>Une collection de balades urbaines constituée entre 2016 et 2019 offrira à chaque commune de la Métropole de Montpellier, une œuvre sonore originale. Une expérience artistique et sensorielle dont vous êtes l’acteur et le spectateur en mouvement. Les
      parcours sont accessibles en ligne gratuitement et en permanence depuis votre smartphone. <b>Chaussez votre casque et laissez-vous guider !</b>
    </p>
  </div>
  <img :src="'/static/img/w2.jpg'"></img>
  <div class="tem-text">
    <p>L’occasion de (re)découvrir le territoire à travers le regard singulier de l’artiste Patrice Barthès. Les parcours sont nourris par des recherches, des rencontres et des contributions d’habitants, d’architectes, d’urbanistes, d’historiens, de paysagistes,
      … Un compositeur, à chaque fois différent, est invité à créer un univers sonore et musical.</p>
  </div>
  <img :src="'/static/img/w4.jpg'"></img>
  <div class="tem-text">
    <p>En révélant les espaces, les réalités, les richesses et le patrimoine des 31 communes, la collection fait apparaître un maillage géo-poétique de ce territoire administratif récemment constitué. Une invitation à une nouvelle perception des espaces
      traversés.
    </p>
  </div>
  <img :src="'/static/img/w0.jpg'"></img>
  <div class="tem-text">
    <h2>Patrice Barthès : artiste montpelliérain </h2>
    <p>Chorégraphe et plasticien, Patrice Barthès créé des oeuvres sensibles qui déplacent le regard du spectateur hors de ses repères en usant de dispositifs qui ré-interrogent notre rapport à l'environnement, son actualité et ses représentations. </p>
  </div>
  <img :src="'/static/img/w3.jpg'"></img>
  <div class="tem-text">
    <h2>L’Atelline : lieu d’activation art et espace public / Atelier de Fabrique Artistique</h2>
    <p>L’Atelline accompagne depuis plus de 10 ans dans leurs démarches et leurs projets de création des artistes qui choisissent l’espace public comme terrain de questionnement, d’expérimentation, de représentation, de rencontre. Elle est implantée depuis
      l’origine dans la métropole montpelliéraine tout en intervenant à l’échelle régionale et nationale dans le cadre de nombreux partenariats. Elle produit et accompagne la mise en oeuvre de Territoire en Mouvements.
    </p>
  </div>


  <mapbox access-token="pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg" :map-options="{
  style: 'mapbox://styles/davidonet/cj3sji7kk001g2smog1w1oohw',
  center: [3.8999597,43.6056334],
  zoom: 10,
  interactive:false
}" :nav-control="{show:false}"></mapbox>
</div>
</template>
<style>
#map {
  width: 100%;
  height: 600px;
}

img {
  width: 100%;
}

p {
  text-align: left;
}

h1,h2 {
  margin-bottom: 0.5em;
  color: #00FF80;
}

.tem-text {
  margin-top: 2em;
  margin-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
}
</style>

<script>
import Mapbox from 'mapbox-gl-vue'
export default {
  name: 'welcome',
  components: {
    'mapbox': Mapbox
  },
  data() {
    return {}
  }
}
</script>
