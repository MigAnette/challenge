<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" fixed class="hidden-lg-and-up">
    <v-btn color="teal" flat value="hjem" :to="{name: 'Home', params: {user_id: this.user.uid}}">
      <span class="hidden-sm-and-down">Hjem</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="profil" :to="{name: 'Profile', params: {user_id: this.user.uid}}">
      <span class="hidden-sm-and-down">Profil</span>
      <v-icon>person</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="udfordringer" :to="{name: 'LoggedInExamples', params: {user_id: this.user.uid}}">
      <span class="hidden-sm-and-down">Udfordringer</span>
      <v-icon>terrain</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
import firebase from 'firebase/app' 
require('firebase/auth')

export default {
  name: 'BottomNavBar',
  data() {
    return {
     user: null,
    }
  },
  methods: {
  
  },
  created() {
    this.user = firebase.auth().currentUser;
  }
   
 
};
</script>

<style>
</style>
