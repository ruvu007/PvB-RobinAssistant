<template>
  <div id="app">
    <v-home></v-home>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import "./scss/main.scss";
</style>

<script>
import Home from '@/views/Home.vue'

export default {
  components: {
    'v-home': Home
  }
}
</script>
