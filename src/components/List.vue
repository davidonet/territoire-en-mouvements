<template>
<div class="list">
  <div class="tem-text">
    <h1>Informations pratiques</h1>
    <p>Rendez-vous au point de départ des balades, équipé d’<b>un téléphone portable chargé et connecté à internet et d’un casque audio.</b> <br/> Placez-vous devant la <b>signalétique ronde</b> « territoire en mouvements ».<br/> Cliquez sur <b>« commencer le parcours »</b>      pour lancer la piste audio.<br/> Suivez les indications qui vous guident à travers les paysages, à la rencontre du patrimoine, vers de nouvelles perceptions.<br/> L'artiste <b>Patrice Barthès</b> vous invite à vivre un moment poétique, des instants
      sensibles dont vous êtes l’acteur et le spectateur en mouvement.
    </p>
  </div>
  <div class="container-fluid">
    <b-table :items="town" :fields="fields">
      <template slot="name" slot-scope="item">
        <router-link :to="item.item.link">{{item.item.name}}
        </router-link>
      </template>
      <template slot="sound" slot-scope="item">
        <a target="_blank" :href="item.item.soundlink">{{item.item.sound}}</a>
      </template>
    </b-table>
  </div>
</div>
</template>
<style scoped>
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
import "vue-awesome/icons/external-link"
import Icon from "vue-awesome/components/Icon"
import axios from "axios";

export default {
  name: "list",
  components: {
    Icon
  },
  data: () => ({
    town: [],
    fields: {
      name: {
        label: "Ville",
        sortable: true
      },
      sound: {
        label: "Compositeur"
      },
      duration: {
        label: "Durée"
      }
    }
  }),
  methods: {
    update: function() {
      for (let t in this.$root.mbpaths.features) {
        let properties = this.$root.mbpaths.features[t].properties
        this.$root.paths[properties.id] = properties;
        this.$root.paths[properties.id].location = this.$root.mbpaths.features[t].geometry.coordinates;
        this.town.push({
          name: properties.town,
          link: "/play/" + properties.id,
          duration: Math.ceil(properties.length / 60) + "min ",
          sound: properties.sound,
          soundlink: properties.soundlink
        });
      }
      console.log(this.$root.paths);
    }
  },
  created: function() {
    let that = this;
    if (this.$root.mbpaths.features) {
      this.update();
    } else {
      axios.get("https://api.mapbox.com/datasets/v1/davidonet/cj3sj2ayk001956pmle6pozz3/features?access_token=pk.eyJ1IjoiZGF2aWRvbmV0IiwiYSI6Ijkydjd0dlEifQ.WOwbKOmSpVSeeh11crbidg").then((ret) => {
        that.$root.mbpaths = ret.data;
        that.update();
      });
    }
  }
}
</script>
