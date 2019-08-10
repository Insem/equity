<template>
  <footer>
    <div class="text_row">
      <div class="text_column">
        <div class="footer_title">Ищущим работу</div>
        <div class="footer_content">Пункт меню 1</div>
        <div class="footer_content">Пункт меню 2</div>
        <div class="footer_content">Пункт меню 3</div>
        <div class="footer_content">Пункт меню 4</div>
      </div>
      <div class="text_column">
        <div class="footer_title">Работодателям</div>
        <div class="footer_content">Пункт меню 1</div>
        <div class="footer_content">Пункт меню 2</div>
        <div class="footer_content">Пункт меню 3</div>
        <div class="footer_content">Пункт меню 4</div>
      </div>
      <div class="text_column">
        <div class="footer_title">Блог</div>
        <div class="footer_title">О нас</div>
        <div class="footer_content">Пункт меню 1</div>
        <div class="footer_content">Пункт меню 2</div>
        <div class="footer_content">Пункт меню 3</div>
        <div class="footer_content">Пункт меню 4</div>
      </div>
      <div class="text_column">
        <div class="footer_title">Мы в соцсетях:</div>
        <div class="footer_icons">
          <div v-html="fb"></div>
          <div v-html="vk"></div>
          <div v-html="inst"></div>
          <div v-html="odnk"></div>
        </div>
        <div class="footer_title">Горячая линия:</div>
        <div class="footer_content">8-800-666-14-88 (звонок бесплатный!)</div>
      </div>
    </div>
    <div class="footer_bot">
      <div>Правила и условия</div>
      <div>Персональные данные</div>
      <div>Карта сайта</div>
    </div>
    <div class="footer_copuright">© 2019 «Все за одного»</div>
  </footer>
</template>
<style>
footer .footer_copuright {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-top:50px;
  color:white;
}
footer .footer_bot div:first-child {
  border-left: none !important;
}
footer .footer_bot div {
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  border-left: 1px solid white;
  padding: 0px 10px;
}
footer .footer_bot {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  color: white;
}
footer {
  background-color: #5c5c5c;
  padding: 25px 0px;
  font-family: "Open Sans";
}
footer .text_column .footer_title {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
}
footer .text_column > div {
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 5px;
}
footer .text_column > div:first-child {
  margin-top: 0px !important;
}
footer .text_column:first-child {
  border-left: none !important;
}
footer .text_column {
  padding: 15px 30px;
  border-left: 1px solid white;
}
footer .text_column .footer_content {
}
footer .text_row {
  display: flex;
  justify-content: center;
}
footer .footer_icons {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 15px;
}
footer .footer_icons div svg {
  width: 100% !important;
}
footer .footer_icons div {
  display: flex;
  justify-content: center;
  min-width: 25px;
  max-width: 25px;
  margin-right: 10px;
}
</style>
<script>
import vk from "../assets/img/svg/vk-logo.svg";
import fb from "../assets/img/svg/facebook.svg";
import inst from "../assets/img/svg/instagram.svg";
import odnk from "../assets/img/svg/odnk.svg";

export default {
  components: {},
  data() {
    return {
      vk,
      fb,
      inst,
      odnk
    };
  },
  created() {}
};
</script>