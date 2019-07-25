<template>
      <v-container>
          <v-dialog v-model="dialog" persistent max-width="400px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <div class="headline modal_title">Быстрая регистрация через</div>
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-md class="pt-0">
              <v-layout wrap md2 lg2 align-center justify-center column fill-height>
                <v-flex xs12 sm6 md12 >
                    <div style="background-color: #56779a;"  class="pa-1 d-inline-block">
                        <v-img
                            :src="require('../assets/img/social_networks/vk.png')"
                             width="200px"
                             height="30px"
                             class="modal_img"
                    ></v-img>   
                    </div>           
                </v-flex> 
                <v-flex xs12 sm6 md12 class="d-flex">
                    <div style="background-color: #45619b;"  class="pa-1 d-inline-block">
                        <v-img
                            :src="require('../assets/img/social_networks/fb.png')"
                             width="200px"
                             height="30px"
                             class="modal_img"
                    ></v-img>   
                    </div>           
                </v-flex>
                <v-flex xs12 sm6 md12 class="d-flex">
                    <div style="background-color: #228fdf;"  class="pa-1 d-inline-block">
                        <v-img
                            :src="require('../assets/img/social_networks/mail_ru.png')"
                             width="200px"
                             height="30px"
                             class="modal_img"
                    ></v-img>   
                    </div>           
                </v-flex>
                <v-flex xs12 sm6 md12 class="d-flex">
                    <div style="background-color: #f7af54;"  class="pa-1 d-inline-block">
                        <v-img
                            :src="require('../assets/img/social_networks/odnokl.png')"
                             width="200px"
                             height="30px"
                             class="modal_img"
                    ></v-img>   
                    </div>           
                </v-flex>
                <v-flex xs12 sm6 md12 class="d-flex">
                    <div style="background-color: #d95232;"  class="pa-1 d-inline-block">
                        <v-img
                            :src="require('../assets/img/social_networks/g+.png')"
                             width="200px"
                             height="30px"
                             class="modal_img"
                    ></v-img>   
                    </div>           
                </v-flex>

                <v-flex xs12 sm6 md4 mt-3 >
                    <v-card-text class="title font-weight-light py-0 px-0" >
                       Или по Email 
                    </v-card-text>                
                </v-flex> 

                <v-flex xs12 sm6 md12 class="mt-3" style="width:200px">
                  <v-text-field label="Email"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md12 class="d-block mt-1" >
                    <v-card-text class="py-0 px-0 ">
                       <span>Уже зарегистрированы? </span><span><a class="d-inline" href="https://community.vuetifyjs.com" target="_blank">Войдите</a></span>
                    </v-card-text>                
                </v-flex> 
                
                <v-flex xs12 sm6 md12 class="d-block mt-2">
                    <v-card-text class="py-0 px-0 ">
                        <v-checkbox  class="d-inline " >
                            <template v-slot:label>
                                <div class="body-2">
                                    Я согласен с правилами сайта
                                </div>
                            </template>
                        </v-checkbox>
                    </v-card-text>                
                </v-flex>
                <v-btn color="blue darken-1 white--text"  text @click="dialog = false">Зарегистрироваться</v-btn>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      </v-container>
</template>
    
<script>
export default {
  data: () => ({
    dialog: true,
  })
}
</script>

<style>
.modal_title{
    width:100%;
    text-align: center;
}
.modal_img div{
    background-size: auto!important;
}
</style>
