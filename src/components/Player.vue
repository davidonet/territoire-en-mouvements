<template>
<div class="player">
  <div v-for="chapter in info.cues" :key="chapter.pos">
    <b-button variant="link" v-on:click="$root.sound.seek(chapter.pos)">{{chapter.title}}</b-button>
  </div>
  <b-navbar type="inverse" variant="inverse" class="fixed-bottom">
    <b-nav is-nav class="justify-content-center">
      <b-nav-item>
        <b-button variant="link" v-on:click="$root.sound.stop()">
          <icon name="stop" scale="2"></icon>
        </b-button>
      </b-nav-item>
      <b-nav-item v-if="!isPlaying">
        <b-button variant="link" v-on:click="play">
          <icon name="play" scale="2"></icon>
        </b-button>
      </b-nav-item>
      <b-nav-item v-if="isPlaying">
        <b-button variant="link" v-on:click="$root.sound.pause()">
          <icon name="pause" scale="2"></icon>
        </b-button>
      </b-nav-item>
    </b-nav>
  </b-navbar>
</div>
</template>


<script>
import "vue-awesome/icons/play"
import "vue-awesome/icons/pause"
import "vue-awesome/icons/stop"
import Icon from "vue-awesome/components/Icon"
import {
  Howl
} from "howler"

export default {
  name: "player",
  components: {
    Howl,
    Icon
  },
  beforeRouteLeave(to, from, next) {
    if (this.$root.sound) {
      this.$root.sound.stop();
    }
    next();
  },
  data() {
    return {
      isPlaying: false,
      info: this.$root.paths[this.$route.params.town],
      audioSources: this.$root.paths[this.$route.params.town].audiourl
    }
  },
  methods: {
    play() {
      if (this.$root.sound) {
        this.$root.sound.stop();
      }
      this.$root.sound = new Howl({
        src: this.audioSources,
        html5: true
      });
      this.$root.sound.play();
      this.isPlaying = true;
    }
  }
}
</script>
