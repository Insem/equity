<template>
  <div class="work">
    <div class="title_list">
      <div>Категория</div>
      <div>Название задачи</div>
      <div>Стоимость</div>
      <div>Дата начала</div>
      <div>Срок сдачи</div>
    </div>
    <div class="user_data">
      <div class="data">
        <div class="data_list">
          <div class="data_item">Тексты</div>
          <div class="data_item">Написать статью</div>
          <div class="data_item">1000 руб</div>
          <div class="data_item">20.08.2019</div>
          <div class="data_item">05.09.2019</div>
          <div class="data_item">
            <font-awesome-icon icon="plus" />
          </div>
        </div>
        <div class="data_block">
          <div class="left">
            <div class="image_block">
              <div class="star" v-html="emptyStar"></div>
              <img src="img/sloy.png" />
              <div class="text">
                <div>Компания</div>
                <div class="company_name">"Рога и Копыта"</div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="project_title">Название проекта</div>
            <div class="project_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div class="project_info">
              <div class="project_type">
                <div class="category">Категория: <span>тесты</span></div>
                <div class="price">Стоимость:<span>100р</span></div>
              </div>
              <div class="project_date">
                <div class="category">Дата начала работы: <span>20.08.2019</span></div>
                <div class="price">Срок сдачи:<span>05.09.2019</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.work {
  margin-top: 30px;
}
.work .title_list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 16px;
  margin-bottom: 20px;
}
.work .title_list div {
  font-weight: 600;
  font-size: 14px;
  width: 20%;
  text-align: center;
}

.work .user_data .data .data_list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #e4e4e4;
}

.work .user_data .data .data_list .data_item {
  text-align: center;
  width: calc(20% - 4px);
}
.work .user_data .data .data_list .data_item:last-child {
  width: 16px;
}
.work .user_data .data .data_block .left {
  width: 115px;
  padding-right: 20px;
}
.work .user_data .data .data_block{
  display: flex;
  flex-direction: row;
  margin-top:10px;
}
.work .user_data .data .data_block .right .project_info {
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}
.work .user_data .data .data_block .right {
  width:calc(100% - 115px + 20px);
}
.work .user_data .data .data_block .image_block {
  position: relative;
}
.work .user_data .data .data_block .image_block div {
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}
.work .user_data .data .data_block .image_block img {
  border-radius: 50px;
  width: 100%;
  margin-bottom: 10px;
}
.work .user_data .data .data_block .image_block .star {
  width: 25px;
  display: inline-block;
  position: absolute;
  right: 5px;
  top: 8px;
}
.work .user_data .data .data_block .image_block .star svg {
  width: 100% !important;
}
</style>
<script>
import emptyStar from "../../../assets/img/svg/empty-star.svg";
export default {
  data() {
    return {
      emptyStar
    };
  }
};
</script>