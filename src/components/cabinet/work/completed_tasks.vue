<template>
  <div class="work">
    <div class="title_list">
      <div>Категория</div>
      <div>Название задачи</div>
      <div>Стоимость</div>
      <div>Завершено</div>
      <div>Отзывы</div>
    </div>
    <div class="user_data">
      <div class="data">
        <div class="data_list">
          <div class="data_item">Тексты</div>
          <div class="data_item">Написать статью</div>
          <div class="data_item">1000 руб</div>
          <div class="data_item">20.08.2019</div>
          <div class="data_item resp">Я | Обо мне<font-awesome-icon  icon="comments" /></div>
          <div class="data_item" @click="animate(animCss)">
            <font-awesome-icon icon="plus" />
          </div>
        </div>
        <div class="data_block" v-bind:class="animCss">
          <div class="info_stripe">
            <div class="left_block">
              <div class="image_block">
                <img src="img/sloy.png" />
                <div class="text">
                  <div>Компания</div>
                  <div class="company_name">"Рога и Копыта"</div>
                </div>
                <div class="star" v-html="emptyStar"></div>
              </div>
            </div>
            <div class="right_block">
              <div class="project_title">Название проекта</div>
              <div class="project_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="project_info">
                <div class="project_type">
                  <div class="category">
                    Категория:
                    <span>тесты</span>
                  </div>
                  <div class="price">
                    Стоимость:
                    <span>100р</span>
                  </div>
                </div>
                <div class="project_date">
                  <div class="category">
                    Дата начала работы:
                    <span>20.08.2019</span>
                  </div>
                  <div class="price">
                    Срок сдачи:
                    <span>05.09.2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="star" v-html="emptyStar"></div>
          </div>
          <div class="comment_stripe">
            <div class="employer_response">
              <div class="response_tit">Работотадель оставил отзыв о Вас!</div>
              <div class="response_text">
                Хуё-моё, с Иван Васильичем пиздец приятно работать, не мужик,
                а загляденье, если бы все писали такие статьи, как Иван Васильич
                пишет, то давно отечественная журналистика была бы впереди
                планеты всей. Заебись, короче, рекомендую!
              </div>
              <div class="response_bals">
                Работодатель выставил вам баллы:
                Вежливость в общении: 5
                Еще что-нибудь: 4
                рейтинговую систему я полностью проработаю
              </div>
            </div>
            <div class="worker_response">
              <div class="response_tit">Оставьте отзыв о работодателе!</div>
              <textarea placeholder="Напишите ваш отзыв" name></textarea>
              <button class="btn">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="./css/completed_tasks.css">
</style>
<script>
import emptyStar from "../../../assets/img/svg/empty-star.svg";
export default {
  data() {
    return {
      emptyStar,
      show: false,
      animCss:{}
    };
  },
  mounted(){
  },
  methods:{
    animate(){
      let data = this.$data;
      data.show = !data.show;
      data.animCss = {show:data.show, un_show:!data.show};
    }
  }
};
</script>