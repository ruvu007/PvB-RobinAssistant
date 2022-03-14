<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="col-12 col-md-4">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="col-12 col-md-4 offset-md-4">
        <router-link to="/#watisrobin">Wat is Robin</router-link>
        <router-link to="/#voordelen">Voordelen</router-link>
        <router-link to="/#hoewerkthet">Hoe werkt het?</router-link>
        <router-link to="/#hoewerkthet">Contact</router-link>
        <a href="https://www.robinassists.me/dashboard/">Login</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
