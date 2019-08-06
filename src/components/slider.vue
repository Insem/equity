<template>
  <div class="slider">
    <div id="example">
      <div>
        <carousel
          :paginationColor="'#5e7d9b'"
          :paginationActiveColor="'#fff'"
          :navigationEnabled="true"
          :navigationPrevLabel="arrowL()"
          :navigationNextLabel="arrowR()"
        >
          <slide>
            <div class="slider_block">
              <div class="slider_image">
                <peopleIcon />
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
              <div class="slider_image">
                <vkIcon />
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
              <div class="slider_image">
                <peopleIcon />
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
  border: 1px solid white;
  border-radius: 100px;
}
label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<script>
import { Carousel, Slide } from "vue-carousel";
import peopleIcon from "../assets/img/svg/people.svg";
import vkIcon from "../assets/img/svg/vk.svg";
export default {
  components: {
    Carousel,
    peopleIcon,
    vkIcon,
    Slide
  },
  data() {
    return {
      arrowR: () =>
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`,
      arrowL: () =>
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`
    };
  },
  created() {}
};
</script>