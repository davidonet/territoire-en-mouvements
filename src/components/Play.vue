<template>
<div class="play">
  <mapbox access-token="pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg" :map-options="{
  style: 'mapbox://styles/davidonet/cj49dn5nh2oda2qn0vq7tluzy',
  center: info.location,
  zoom: 17
}"></mapbox>
  <div class="tem-text">
    <h2>{{ info.town }}</h2>
    <p>{{ info.presentation }}</p>
    <p><small>{{ info.courtesy }}</small></p>
    <b-button v-on:click="play">Écouter</b-button>
    <router-link to="/list" class="float-right"> Revenir à la liste</router-link>
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
import {
  Howl
} from "howler"

export default {
  name: "play",
  components: {
    Mapbox,
    Howl
  },
  data() {
    return {
      info: this.$root.paths[this.$route.params.town],
      audioSources: this.$root.paths[this.$route.params.town].audiourl
    }
  },
  methods: {
    play() {
      var sound = new Howl({
        src: this.audioSources,
        html5: true
      });
      sound.play();
    }
  }
}
</script>
