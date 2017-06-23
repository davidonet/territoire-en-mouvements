<template>
<div class="play">
  <mapbox access-token="pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg" :map-options="{
  style: 'mapbox://styles/davidonet/cj49dn5nh2oda2qn0vq7tluzy',
  center: location,
  zoom: 17
}"></mapbox>
  <div class="tem-text">

    <h2>{{ town }}</h2>
    <p>{{ presentation }}</p>
    <p>{{ courtesy }}</p>
  </div>
</div>
</template>
<style>
#map {
  width: 100%;
  height: 300px;
}
h2{
  margin-bottom: 1em;
}
p {
  text-align: justify;
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
import Mapbox from 'mapbox-gl-vue'
export default {
  name: 'play',
  components: {
    Mapbox
  },
  data() {
    return this.$root.paths[this.$route.params.town]
  }
}
</script>
