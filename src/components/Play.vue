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
        <p>Point de départ : <em>{{ info.start}}</em></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <small>Latitude : {{info.location[0]}}  Longitude {{info.location[1]}}<br/>Durée : {{Math.ceil(info.length / 60)}} min</small>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-12">
        <p v-html="info.presentation"></p>
        <p class="float-right">Patrice Barthès</p>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        Compositeur<br/> <a target="_blank" :href="info.soundlink">{{info.sound}}</a>
      </div>
      <div class="col-8 text-right">
        <small v-html="info.courtesy"></small>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <b-button variant="success">Commencer le parcours</b-button>
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
