<template>
  <div>
    <!-- Back arrow to previous page -->
    <back-arrow></back-arrow>
    <!-- header with Tilmeld for at starte udfordring -->
    <h1 class="text-xs-center hidden-md-and-down desktopH1">Tilmeld for at starte udfordring</h1>
    <!-- H1 for everything else: -->
    <h1 class="text-xs-center hidden-lg-and-up">Tilmeld for at starte udfordring</h1>
    <v-layout align-content-center mt-5>
      <v-flex xs12 sm6 md6 lg6>
        <v-form class="px-3" ref="form">
          <!-- Email: -->
          <!-- Input for email -->
          <v-text-field v-model="email" :rules="emailRules" label="Email:" required></v-text-field>

          <!-- Kodeord: -->
          <!-- Input for Kodeord -->
          <v-text-field v-model="kodeord" :counter="6" :rules="kodeordRules" label="Kodeord:" required></v-text-field>

          <!-- Navn: -->
          <!-- Input for Navn -->
          <v-text-field v-model="navn" label="Brugernavn:" :rules="navnRules" required></v-text-field>

          <!-- Button with Tilmeld/submit opens the site you wanted to go to-->
          <v-btn @click="submit" :loading="loading">Tilmeld</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from 'firebase/app' 
require('firebase/auth')
import BackArrow from "@/components/navigation/BackArrow";


export default {
  name: "SignUp",
  components: {
    BackArrow
  },
  data() {
    return {
      email: null,
      kodeord: null,
      navn: null,
      emailRules: [
        v => !!v || "Email er påkrævet",
        v => /.+@.+/.test(v) || "Email skal være valid"
      ],
      kodeordRules: [
          v => !!v || "Kodeord er påkrævet",
          v => v.length >= 6 || 'Kodeordet skal have mindst 6 karaktere'
      ],
      navnRules: [
          v => !!v || "Navn er påkrævet"
      ]
     
    };
  },
  methods: {
    // on sumbit add user to authentication and add to firestore database with uid
    submit() {
        
    }
  }
};
</script>

<style>
</style>
