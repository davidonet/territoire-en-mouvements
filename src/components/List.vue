<template>
<div class="list">
  <h1>List</h1>
  <router-link to="/">home</router-link>
  <ul>
    <li v-for="item in town">
      <router-link :to="item">{{ item }}</router-link>
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
      ret.town.push(t)
    }
    return ret
  }
}
</script>
