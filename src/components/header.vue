<template>
  <header>
    <div class="blue_line"></div>
    <div class="header_main">
      <div class="logo" v-html="logo"></div>
      <div class="nav">
        <router-link to="#">Ищущим работу</router-link>
        <router-link to="#">Работодателям</router-link>
        <router-link to="#">Блог</router-link>
        <router-link to="#">О нас</router-link>
      </div>
      <div class="login">
        <router-link to="#">
          <font-awesome-icon icon="key" /> Вход
        </router-link> или
        <router-link to="#">
          <font-awesome-icon icon="lock" /> Регистрация
        </router-link>
      </div>
    </div>
  </header>
</template>
<style scoped src="../assets/css/components/header/header-lg.css">
</style>
<script>
import logo from "../assets/img/svg/logo.svg";
export default {
  components: {},
  data() {
    return {
      logo
    };
  },
  created() {}
};
</script>