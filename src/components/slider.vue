<template>
  <div class="slider">
    <div id="example">
      <div>
        <carousel
          :paginationColor="'#5e7d9b'"
          :paginationActiveColor="'#fff'"
          :navigationEnabled="true"
          :navigationPrevLabel="angleLeft"
          :navigationNextLabel="angleRight"
        >
          <slide>
            <router-link to="#" class="slider_block">
              <div class="slider_image">
                <font-awesome-icon icon="user-plus" />
              </div>
              <div class="slider_text">
                <div class="slider_title">Создайте профиль</div>
                <div>Пройдите процедуру регистрации и дождитесь письма об активации вашего аккаунта.</div>
              </div>
            </router-link>
          </slide>
          <slide>
            <router-link to="#" class="slider_block">
              <div class="slider_image">
                <font-awesome-icon icon="id-card" />
              </div>
              <div class="slider_text">
                <div class="slider_title">Заполните профиль</div>
                <div>Отметьте ваши профессиональные навыки или загрузите резюме</div>
              </div>
            </router-link>
          </slide>
          <slide>
            <router-link to="#" class="slider_block">
              <div class="slider_image">
                <font-awesome-icon icon="list-alt" />
              </div>
              <div class="slider_text">
                <div class="slider_title">Приступите к работе</div>
                <div>Найдите работу себе по вкусу среди опубликованных разовых заданий и вакансий</div>
              </div>
            </router-link>
          </slide>
          <slide>
            <router-link to="#" class="slider_block">
              <div class="slider_image">
                <font-awesome-icon icon="shield-alt" />
              </div>
              <div class="slider_text">
                <div class="slider_title">Репутация превыше всего</div>
                <div>
                  Мы выступаем гарантом сделки между сторонами и модератором в любой спорной
                  ситуации. Интересы работника и работодателя равноценны и будут соблюдены.
                </div>
              </div>
            </router-link>
          </slide>
          <slide>
            <router-link to="#" class="slider_block">
              <div class="slider_image">
                <font-awesome-icon icon="hands-helping" />
              </div>
              <div class="slider_text">
                <div class="slider_title">Социальная миссия</div>
                <div>
                  Пожалуйста, прочитайте, для кого мы создали сервис
                  “Все за одного” и отнеситесь с пониманием к нашим
                  требованиям предоставить те или иные подтверждающие документы.
                </div>
              </div>
            </router-link>
          </slide>
          <slide>
            <router-link to="#" class="slider_block">
              <div class="slider_image">
                <font-awesome-icon icon="info" />
              </div>
              <div class="slider_text">
                <div class="slider_title">Нужна помощь?</div>
                <div>Вот, как можно с нами связаться по тем или иным вопросам:</div>
              </div>
            </router-link>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
.VueCarousel-navigation button {
  width: 50px;
}
.slider {
  background-color: #003061;
  padding: 0 60px;
}
.slider button:focus {
  outline: none !important;
}
.slider button svg {
  fill: white !important;
}
.slider_block {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 180px;
  padding: 40px 0px;
  background-color: #003061;
}
.slider_block .slider_text .slider_title {
  font-size: 30px;
  margin-top: 20px;
}
.slider_block .slider_text {
  margin-left: 40px;
  margin-right: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  font-family: "Didact Gothic", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}
.slider_block .slider_image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  min-width: 180px;
  max-width: 180px;
  border: 1px solid white;
  border-radius: 100px;
}
label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.slider_image svg {
  width: 70% !important;
  height: 70% !important;
}
</style>
<script>
import { Carousel, Slide } from "vue-carousel";
import peopleIcon from "../assets/img/svg/people.svg";
import vkIcon from "../assets/img/svg/vk.svg";
import angleRight from "../assets/img/svg/angle-right.svg";
import angleLeft from "../assets/img/svg/angle-left.svg";

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      peopleIcon,
      vkIcon,
      angleRight,
      angleLeft
    };
  },
  created() {}
};
</script>