<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Refvdbgfbfgbfglease</span>
      </v-btn>
      <router-link to="/about">About</router-link>
    </v-toolbar>

    <v-content>
      <modal></modal>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import modal from './components/modal'

export default {
  name: 'App',
  components: {
    modal
  },
  data () {
    return {
      //
    }
  }
}
</script>
