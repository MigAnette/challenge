<template>
  <div>
    <!-- Gear Icon in top right corner showing the settingProfile modal -->
    <v-toolbar class="hidden-lg-only" flat color="transparent">
      <v-spacer></v-spacer>
      <setting-profile></setting-profile>
    </v-toolbar>

    <v-toolbar class="hidden-md-and-down mt-5" flat color="transparent">
      <v-spacer></v-spacer>
      <setting-profile></setting-profile>
    </v-toolbar>
    <div class="challengeContainer">
      <!-- Header with Din Profil -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Din Profil</h1>

      <!-- H1 for everything else: -->

      <h1 class="hidden-lg-and-up smallH1">Din Profil</h1>

      <!-- Name and email -->
      <h5 class="text-xs-center">{{user.email}}</h5>
      <!-- Header with Dine udfordringer -->
      <h2 class="mt-5 teal--text">Dine Udfordringer:</h2>
    </div>

    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="udfordring in udfordringer" :key="udfordring.id">
        <v-card
          elevation="2"
          class="ma-3"
          :to="{name: 'ProfilChallenge', params:{udfordringen_id: udfordring.udfordringSlug}}"
        >
          <!-- text Udfordring-Name -->
          <v-card-title class="headline">{{ udfordring.udfordringNavn}}</v-card-title>
          <!-- Trin: -->
          <profile-card-text :udfordringen="udfordring"></profile-card-text>
          <v-layout row wrap align-center justify-center fill-height>
            <img class="mb-3" src="@/assets/Statusbar.png">
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- If made statusbar -->

    <!-- button with a plus sign that goes to Lav en udfordring -->
    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
require("firebase/auth");

import ProfileCardText from "@/components/profileComponents/ProfileCardText";
import SettingProfile from "@/components/settings/SettingProfile";
export default {
  name: "Profile",
  components: {
    SettingProfile,
    ProfileCardText
  },
  props: {},
  data() {
    return {
      udfordringer: [],
      user: null
    };
  },
  created() {
    // get challenge with trin

    this.user = firebase.auth().currentUser;

    db.collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let udfordring = doc.data();
          udfordring.id = doc.id;
          this.udfordringer.push(udfordring);
        });
      });
  }
};
</script>

<style>
</style>
