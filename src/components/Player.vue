<template>
<div class="player">
  <div class="fluid-container">
    <div class="row">
      <div class="col-12 text-center">
        <h2>{{info.town}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-5 text-right">
      </div>
      <div class="col-2 text-center">
        <img v-on:click="stop" src="/static/icon/tem_path-start.svg">
      </div>
      <div class="col-5">
      </div>
    </div>
    <div class="row" v-for="(c,key,index) in cues">
      <div class="col-5 text-right chapmiddle">
        <span :id="'c'+key" :class="{'text-success':c.isActive}" v-if="(index%2)===1" v-on:click="sound.seek(key)">{{c.title}}</span>
      </div>
      <div class="col-2 text-center">
        <img v-on:click="sound.seek(key)" src="/static/icon/tem_path-chapter.svg"></img>
      </div>
      <div class="col-5 chapmiddle">
        <span :id="'c'+key" :class="{'text-success':c.isActive}" v-if="(index%2)===0" v-on:click="sound.seek(key)">{{c.title}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-5 text-right">
      </div>
      <div class="col-2 text-center">
        <img src="/static/icon/tem_path-end.svg">
      </div>
      <div class="col-5">
      </div>
    </div>
    <div style="height:300px">
      &nbsp;
    </div>
    <b-navbar type="inverse" variant="inverse" class="fixed-bottom">
      <b-nav is-nav class="justify-content-center">
        <b-nav-item v-on:click="stop">
          <icon name="stop" scale="2"></icon>
        </b-nav-item>
        <b-nav-item>
          <h3>{{ position }}</h3>
        </b-nav-item>
        <b-nav-item v-if="!isPlaying" v-on:click="play">
          <icon name="play" scale="2"></icon>
        </b-nav-item>
        <b-nav-item v-if="isPlaying" v-on:click="pause">
          <icon name="pause" scale="2"></icon>
        </b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</div>
</template>
<style scoped>
img {
  height: 64px;
}

h2 {
  margin-top: 24px;
}

h3 {
  font-family: fixed;
}

.chapmiddle {
  padding-top: 18px;
}

.player {
  overflow-x: hidden;
}
</style>

<script>
import "vue-awesome/icons/play";
import "vue-awesome/icons/pause";
import "vue-awesome/icons/stop";
import Icon from "vue-awesome/components/Icon";
import VueScrollTo from "vue-scrollto";

import {
  Howl
} from "howler"

export default {
  name: "player",
  components: {
    Howl,
    Icon,
    VueScrollTo
  },
  beforeRouteLeave(to, from, next) {
    if (this.sound) {
      this.stop();
      clearInterval(this.poll);
    }
    next();
  },
  data() {
    let cues = {};
    for (let _c in this.$root.paths[this.$route.params.town].cues) {
      let c = this.$root.paths[this.$route.params.town].cues[_c];
      cues[c.pos] = {
        title: c.title,
        isActive: false
      };
    }
    return {
      isPlaying: false,
      info: this.$root.paths[this.$route.params.town],
      audioSources: this.$root.paths[this.$route.params.town].audiourl,
      cues,
      seek: 0,
      current: 0,
      sound: new Howl({
        src: this.$root.paths[this.$route.params.town].audiourl,
        html5: true
      })
    }
  },
  created() {
    scrollTo(document.body, 0, 0);
    if (this.poll) {
      clearInterval(this.poll);
    }
    this.poll = setInterval(this.polling, 950);
  },
  methods: {
    stop() {
      this.sound.stop()
      this.isPlaying = false;
      if (0 < this.current) {
        this.cues[this.current].isActive = false;
      }
      this.seek = 0;
      this.current = 0;
    },
    pause() {
      this.sound.pause();
      this.isPlaying = false;
    },
    polling() {
      this.seek = Math.floor(this.sound.seek());
      if (this.cues[this.seek.toString()]) {
        if (0 < this.current) {
          this.cues[this.current].isActive = false;
        }
        this.current = this.seek;
        this.cues[this.current].isActive = true;
        let chap = this.$el.querySelector("#c" + this.seek.toString());
        VueScrollTo.scrollTo(chap, 1000, {
          offset: -document.documentElement.clientHeight / 2
        });
      }
    },
    play() {
      this.sound.play();
      this.isPlaying = true;
    }
  },
  computed: {
    position: function() {
      function zfill(num, len) {
        return (Array(len).join("0") + num).slice(-len);
      }
      return zfill(Math.floor(this.seek / 60), 2) + ":" + zfill(this.seek % 60, 2);
    }
  }
}
</script>
