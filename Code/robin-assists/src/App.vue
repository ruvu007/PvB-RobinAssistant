<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="nav">
          <div class="col-12 col-md-2 col-lg-3">
            <!-- Logo Robin Assistant -->
            <img src="@/assets/images/logo.png" alt="Het logo van Robin Assistant">
          </div>
          <div class="col-12 col-md-10 col-lg-6 offset-lg-3">
            <router-link to="/#WatIsRobin">Wat is Robin?</router-link>
            <router-link to="/#Voordelen">Voordelen</router-link>
            <router-link to="/#HoeWerktHet">Hoe werkt het?</router-link>
            <router-link to="/#Contact">Contact</router-link>

            <a class="cta-button" href="https://www.robinassists.me/dashboard/">Login</a>
          </div>
        </div>
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
  color: #000;
}

@import "./scss/main.scss";
</style>
