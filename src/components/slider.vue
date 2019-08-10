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
            <div class="slider_block">
              <div v-html="peopleIcon" class="slider_image">
              </div>
              <div class="slider_text">
                <div class="slider_title">Заголовок преимущества</div>
                <div>
                  Текст преимущества текст текст текст
                  еще текст текст текст текст
                  раз два три
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slider_block">
              <div v-html="vkIcon" class="slider_image">
              </div>
              <div class="slider_text">
                <div class="slider_title">Заголовок преимущества</div>
                <div>
                  Текст преимущества текст текст текст
                  еще текст текст текст текст
                  раз два три
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slider_block">
              <div v-html="peopleIcon" class="slider_image">
              </div>
              <div class="slider_text">
                <div class="slider_title">Заголовок преимущества</div>
                <div>
                  Текст преимущества текст текст текст
                  еще текст текст текст текст
                  раз два три
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
.VueCarousel-navigation button{
  width: 50px;
}
.slider {
  background-color: #003061;
  padding: 0 60px;
}
.slider button:focus{
  outline: none!important;
}
.slider button svg{
  fill:white!important;
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
  text-transform: capitalize;
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
.slider_image svg{
  width: 100%;
}
</style>
<script>
import { Carousel, Slide } from "vue-carousel";
import peopleIcon from "../assets/img/svg/people.svg";
import vkIcon from "../assets/img/svg/vk.svg";
import angleRight from "../assets/img/svg/angle-right.svg";
import angleLeft from "../assets/img/svg/angle-left.svg";

console.log(peopleIcon);
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