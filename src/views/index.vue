<template>
  <div class="index_content">
    <div class="body">
      <div class="background"></div>
      <div class="background_content">
        <div class="title">Достойная работа по плечу каждому!</div>
        <div class="find_block">
          <div class="input_block">
            <div class="label">Найти работу</div>
            <input placeholder="Ввести название вакансии " />
          </div>
          <div class="bottom_label">Ты сможешь!</div>
        </div>
        <div class="bottom_text">
          <span>
            Мы твёрдо убеждены, что никакие жизненные обстоятельства не должны
            стать преградой бла-бла-бла
          </span>

          <!--<a class="bottom_link" href="#">(подробнее о нашей миссии)</a>-->
          <router-link class="bottom_link" to="#">(подробнее о нашей миссии)</router-link>

        </div>
      </div>
    </div>
    <slider></slider>
    <div style="height:20px;background-color:#002132;width:100%" ></div>
  </div>
</template>
<style>
@import "../assets/css/views/index/index-lg.css";
</style>
<script>
import slider from "../components/slider";
export default {
  components: {
    slider
  }
};
</script>