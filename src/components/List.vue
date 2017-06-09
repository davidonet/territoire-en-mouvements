<template>
<div class="list">
  <h1>List</h1>
  <router-link to="/">home</router-link>
  <ul>
    <li v-for="item in town">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ul>
</div>
</template>

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
        link: '/play/' + t
      })
    }
    return ret
  }
}
</script>
