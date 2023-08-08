<template>
  <div id="app">
    <app-layout>
      <div id="nav">
        <router-link to="/">Home</router-link>
      </div>
    </app-layout>
    <router-view />
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue"
export default {
  components: {
    AppLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
