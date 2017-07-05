<template>
<div class="partner">
  <div class="tem-text">
      <h1>Les partenaires de l'aventure</h1>
      <h2>Partenaires de création</h2>
      <ul>
      <li>Pour la conception digitale : <a href="http://david-o.net">David Olivari</a> (Ingénierie numérique) et <a href="http://aker.pro/">Adrien Revel</a> (graphiste)</li>
<li>Pour la création sonore :
<ul>
      <li v-for="town in this.$root.paths"> {{town.town}} :  <a :href="town.soundlink">{{town.sound}}</a></li>
</ul>
</li>
      <li>Production déléguée <a href="http://www.latelline.org">L’Atelline</a><br/>
      contact : <a href="mailto:contact@latelline.org">contact@latelline.org</a> <a href="tel:+33499546907">04 99 54 69 07</a></br>
      3 rue de la Cour du recteur , Montpellier</li>
    </ul>
      <h2>Partenaires opérationnels</h2>
      <ul>
        <li>Les communes de la Métropole, leurs acteurs et leurs habitants</li>
      </ul>
      <h2>Partenaires institutionnels et financiers</h2>
      <ul>
        <li>DRAC Occitanie Pyrénées-Méditerranée</li>
        <li>Fonds de dotation pour le mécénat culturel Mécènes Montpellier Méditerranée</li>
        <li>Région Occitanie Pyrénées-Méditerranée</li>
        <li>Montpellier Méditerranée Métropole</li>
        <li>Les communes d'accueil</li>
        <li>Fonds de dotation Mécènes Montpellier Méditerranée en 2016</li>
      </ul>
    </div>
  </div>
</div>
  </template>
<style>
.tem-text {
  margin-top: 2em;
  margin-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
}
</style>
<script>
export default {
  name: "partner"
}
</script>
