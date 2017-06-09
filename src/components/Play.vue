<template>
<div class="play">
  <mapbox access-token="pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg" :map-options="{
  style: 'mapbox://styles/mapbox/streets-v9',
  center: location,
  zoom: 6
}"></mapbox>
  <h1>{{ town }}</h1>
  <p>{{ presentation }}</p>
  <p>{{ courtesy }}</p>
  <router-link to="/list">home</router-link>
</div>
</template>
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
<script>
import Mapbox from 'mapbox-gl-vue'
export default {
  name: 'play',
  components: {
     'mapbox': Mapbox
   },
  data() {
    return this.$root.paths[this.$route.params.town]
  }
}
</script>
