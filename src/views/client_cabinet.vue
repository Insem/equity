<template>
  <div class="cabinet_main">
    <div class="content">
      <div class="cabinet_info">
        <div class="left">
          <div class="title">{{get_time_period()}} Иван Петрович</div>
          <div class="statistics">
            <div class="views">
              <font-awesome-icon icon="eye" />100500 просмотров профиля
            </div>
            <div class="rating">
              <div class="stars">
                <div v-html="star"></div>
                <div v-html="star"></div>
                <div v-html="star"></div>
                <div v-html="star"></div>
                <div v-html="emptyStar"></div>
              </div>
              <div>Ваш рейтинг</div>
            </div>
          </div>
          <div class="project_work">
            <div class="title">Сейчас вы работаете над:</div>
            <div class="project_panel">
              <div class="project_board"></div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="drfault_img" v-html="prof_def"></div>
          <button class="btn">
            <font-awesome-icon icon="download" />Загрузить фотографию
          </button>
        </div>
      </div>
      <div class="horizontal_menu">
        <div class="horizontal_main_menu">
          <div
            v-for="(item, i) in main_menu_arr"
            @click="active(i,main_menu_arr)"
            class="menu_item"
            v-bind:class="{active:item.active}"
          >{{item.val}}</div>
        </div>
        <div class="horizontal_sub_menu">
          <div
            v-for="(item, i) in sub_menu_arr"
            @click="active_sub(i,sub_menu_arr)"
            v-bind:class="{active:item.active}"
            class="menu_item"
          >
            <div class="menu_text">{{item.val}}</div>
          </div>
        </div>
      </div>
      <div id="horizontal_contnent"><div></div></div>
    </div>
  </div>
</template>
<style>
@import "../assets/css/views/client_cabinet/client_cabinet-lg.css";
</style>
<script>
import prof_def from "../assets/img/svg/profile_default.svg";
import emptyStar from "../assets/img/svg/empty-star.svg";
import star from "../assets/img/svg/star.svg";
import about_me  from "../components/cabinet/public_profile/about_me";
import resume  from "../components/cabinet/public_profile/resume";
import contacts  from "../components/cabinet/account/contacts";
import documents  from "../components/cabinet/account/documents";
import settings  from "../components/cabinet/account/settings";
import balance from "../components/cabinet/balance/balance";
import active_tasks  from "../components/cabinet/work/active_tasks";
import completed_tasks from "../components/cabinet/work/completed_tasks";
import calendar  from "../components/cabinet/work/calendar";
import bookmarks  from "../components/cabinet/bookmarks/bookmarks";
import Vue from 'vue';
export default {
  methods: {
    get_time_period() {
      let hours = new Date().getHours();
      if (hours >= 0 && hours < 5) {
        return "Доброй ночи";
      } else if (hours >= 5 && hours < 12) {
        return "Доброе утро";
      } else if (hours >= 12 && hours < 16) {
        return "Добрый день";
      } else if (hours >= 16) {
        return "Добрый вечер";
      }
    },
    active(index, arr) {
      let self = this;
      arr.forEach(function(item, i, array) {
        if (item.active) {
          self.$set(item, "active", false);
          //self.$set(arr, i, {val:item.val, active:false});
        }
        if (i == index) {
          self.$set(item, "active", true);
          //self.$set(arr, i, {val:item.val, active:true});
        }
      });
      console.log("active", arr);
    },
    active_sub(index, arr){
      this.active(index, arr);
      console.log('Component',this.$root.component, Vue,  this.$extend, arr[index].component);
      //this.$mount(arr[index].component);
      //this.$mount.bind(arr[index].component,'#horizontal_contnent');
      (new (Vue.extend(arr[index].component))).$mount('#horizontal_contnent div', false);
      
    }
  },
  components: {
    about_me,
    resume
  },
  data() {
    return {
      prof_def,
      emptyStar,
      star,
      main_menu_arr: [
        {
          val: "Публичный профиль",
          active: true,
          sub_menu: [
            {
              val: "Обо мне",
              active: true,
              component:about_me
            },
            {
              val: "Резюме и навыки",
              active: false,
              component:resume
            }
          ]
        },
        {
          val: "Учётная запись",
          active: false,
          sub_menu: [
            {
              val: "Настройки",
              active: true,
              component:settings
            },
            {
              val: "Документы",
              active: false,
              component:documents
            },
            {
              val: "Контакты и соц. сети",
              active: false,
              component:contacts
            }
          ]
        },
        {
          val: "Работа",
          active: false,
          sub_menu: [
            {
              val: "Активные задачи",
              active: true,
              component:active_tasks
            },
            {
              val: "Выполненные задачи",
              active: false,
              component:completed_tasks
            },
            {
              val: "Деловой календарь",
              active: false,
              component:calendar
            }
          ]
        },
        {
          val: "Баланс",
          active: false,
          sub_menu: [
            {
              val: "Баланс",
              active: true,
              component:balance
            }
          ]
        },
        {
          val: "Закладки",
          active: false,
          sub_menu: [
            {
              val: "Закладки",
              active: true,
              component:bookmarks
            }
          ]
        }
      ]
    };
  },
  computed: {
    sub_menu_arr: function() {
      let arr;
      console.log(this, this._data.main_menu_arr);
      this._data.main_menu_arr.forEach(function(item, i) {
        if (item.active) arr = item.sub_menu;
      });
      return arr;
    }
  },
  created() {}
};
</script>