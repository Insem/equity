<template>
  <div class="content">
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

          <a class="bottom_link" href="#">(подробнее о нашей миссии)</a>
        </div>
      </div>
    </div>
    <slider></slider>
  </div>
</template>
<style>
.body {
  width: 100%;
  height: 750px;
  position: relative;
}
.content .body > div {
  height: 100%;
  width: 100%;
  position: absolute;
}
.content .body .background {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/img/main_page/background_img.jpg);
}

.content .title {
  width: 100%;
  margin: 50px 0px;
  text-align: center;
  display: inline-block;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.75);
}

.content .find_block .input_block input {
  width: 445px;
  height: 65px;
  background-color: #fff;
  border: none;
  color: #838282;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 10px;
}

.content .find_block .input_block .label {
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  color: black;
  margin: 0px 95px;
}

.content .find_block .input_block {
  width: 100%;
  height: 110px;
  background-color: rgba(255, 255, 255, 0.84);
  display: flex;
  align-items: center;
}
.content .find_block {
  width: 80%;
  padding: 0px 10%;
}
.content .find_block .bottom_label {
  text-align: right;
  line-height: 45px;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.75);
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
}

.content .background_content .bottom_text{
  width: 890px;
  margin-top: 165px;
  margin-left:auto;
  margin-right:auto;

}
.content .background_content .bottom_text span{
  display: block;
  width: 100%;
  margin-top: 210px;
  color: #e14e19;
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
}

.content .background_content .bottom_text .bottom_link {
  text-align: right;
  display: block;
  width: 100%;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: underline;
}
</style>
<script>
import slider from "../components/slider";
export default {
  components: {
    slider
  }
};
</script>