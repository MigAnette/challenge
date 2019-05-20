<template>
  <v-toolbar class="hidden-md-and-down" fixed>
    <v-spacer></v-spacer>
    <v-toolbar-items class="topNav">
      <v-btn color="teal" flat value="hjem" @click="homeLogin()">
        <span class="hidden-sm-and-down">Hjem</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="profil" @click="profileLogin()">
        <span class="hidden-sm-and-down">Profil</span>
        <v-icon>person</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="udfordringer" :to="{name: 'Examples'}">
        <span class="hidden-sm-and-down">Udfordringer</span>
        <v-icon>terrain</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");

export default {
  name: "BottomNavBar",
  data() {
    return {
      user: null
    };
  },
  methods: {
    homeLogin() {
      if (this.user) {
        this.$router.push({ name: "Home", params: { user_id: this.user.uid } });
      } else {
        this.$router.push({ name: "SignUp", params: { main: "hjem" } });
      }
    },
    profileLogin() {
      if (this.user) {
        this.$router.push({
          name: "Profile",
          params: { user_id: this.user.uid }
        });
      } else {
        this.$router.push({ name: "SignUp", params: { main: "profil" } });
      }
    }
  },
  created() {
    this.user = firebase.auth().currentUser;
  }
};
</script>

<style>
</style>
