<template>
  <div id="app">
    <app-header></app-header>
    <!--<router-link to="/about">About</router-link>-->
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
<style src="./assets/css/main/main-lg.css">
</style>
<script>
import appHeader from "./components/header";
import appFooter from "./components/footer";
export default {
  name: "App",
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>
