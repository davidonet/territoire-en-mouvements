<template>
<div class="list">
  <div class="tem-text">
      <h1>Informations pratiques</h1>
      <p>
        Rendez-vous au point de départ des balades, équipé d’un téléphone portable chargé et connecté à internet et d’un casque audio.<br/> Téléchargez l’enregistrement audio à partir de votre téléphone portable et suivez les indications qui vous mèneront
        sur les chemins de traverse à la rencontre des paysages, des acteurs et des monuments historiques du territoire.
        </br/> Vivez un moment poétique, des instants sensibles dont vous êtes l’acteur et le spectateur en mouvement.
      </p>
    </div>

  <ul>
    <li v-for="item in town">
      <router-link :to="item.link">{{ item.name }} - {{ item.duration }}</router-link>
    </li>
  </ul>
</div>
</template>
<style>
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
export default {
  name: 'list',
  data() {
    var ret = {
      town: []
    }
    for (let t in this.$root.paths) {
      ret.town.push({
        name: this.$root.paths[t].town,
        link: '/play/' + t,
        duration: Math.ceil(this.$root.paths[t].length / 60) + 'min '
      })
    }
    return ret
  }
}
</script>
