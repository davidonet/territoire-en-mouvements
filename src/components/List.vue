<template>
<div class="list">
  <div class="tem-text">
    <h1>Informations pratiques</h1>
    <p>Rendez-vous au point de départ des balades, équipé d’<b>un téléphone portable chargé et connecté à internet et d’un casque audio.</b><br/>
      Cliquez sur « commencer le parcours »pour lancer la piste audio.<br/>
      Suivez les indications qui vous guident à travers les paysages, à la rencontre du patrimoine, vers de nouvelles perceptions.<br/>
      L'artiste <b>Patrice Barthès</b> vous invite à vivre un moment poétique, des instants sensibles dont vous êtes l’acteur et le spectateur en mouvement.
    </p>
  </div>
  <div class="container-fluid">
    <b-table :items="town" :fields="fields" responsive>
      <template slot="name" scope="item">
        <router-link :to="item.item.link">{{item.item.name}}
        </router-link>
      </template>
      <template slot="sound" scope="item">
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

export default {
  name: "list",
  components: {
    Icon
  },
  data() {
    var ret = {
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
    }
    for (let t in this.$root.paths) {
      ret.town.push({
        name: this.$root.paths[t].town,
        link: "/play/" + t,
        duration: Math.ceil(this.$root.paths[t].length / 60) + "min ",
        sound: this.$root.paths[t].sound,
        soundlink: this.$root.paths[t].soundlink
      })
    }
    return ret
  }
}
</script>
