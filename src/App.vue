<template>
  <div id="app">
    <app-header></app-header>
    <!--<router-link to="/about">About</router-link>-->
    <router-view />
  </div>
</template>
<style>
@import "./assets/css/main/main-lg.css";
</style>
<script>
import appHeader from "./components/header";
export default {
  name: "App",
  components: {
    appHeader
  },
  data() {
    return {
      //
    };
  }
};
</script>
