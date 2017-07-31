<template>
<div class="play">
  <mapbox access-token="pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg" :map-options="{
  style: 'mapbox://styles/davidonet/cj49dn5nh2oda2qn0vq7tluzy',
  center: info.location,
  zoom: 17
}"></mapbox>
  <div class="tem-text">
    <div class="row">
      <div class="col-12">
        <h2>{{ info.town }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p>Point de départ : <span v-html="info.start"></span></p>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <small>Latitude : {{info.location[1]}} <br/>Longitude {{info.location[0]}}<br/><a :href="'https://maps.google.fr/maps?q='+info.location[1]+','+info.location[0]+'&z=20'" target="_blank">M'y rendre avec Google Maps</a><br/>Durée : {{Math.ceil(info.length / 60)}} min</small>
      </div>
      <div class="col-4">
        <b-button v-b-toggle.startpoint class="float-right" variant="outline-secondary" size="sm">Point de départ</b-button>
      </div>
    </div>
    <b-collapse id="startpoint">
      <div class="row">
        <div class="col-12">
          <img class="img-fluid" :src="'/static/img/start/'+$route.params.town+'.jpg'"></img>
        </div>
      </div>
    </b-collapse>
    <hr/>
    <div class="row">
      <div class="col-12">
        <p v-html="info.presentation"></p>
        <p class="float-right">Patrice Barthès</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        Compositeur<br/> <a target="_blank" :href="info.soundlink">{{info.sound}}</a>
      </div>
      <div class="col-md-8 text-right">
        <small v-html="info.courtesy"></small>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <b-button :to="'/player/' + $route.params.town" variant="success">Commencer le parcours</b-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
#map {
  width: 100%;
  height: 300px;
}

h2 {
  margin-bottom: 1em;
}

h1 {
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
import Mapbox from "mapbox-gl-vue"
export default {
  name: "play",
  components: {
    Mapbox
  },
  data() {
    return {
      info: this.$root.paths[this.$route.params.town]
    }
  }
}
</script>
