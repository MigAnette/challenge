<template>
  <div>
    <!-- arrow button back to frontPage -->
    <back-arrow></back-arrow>

    <h1 class="text-xs-center hidden-md-and-down desktopH1">Login</h1>
    <!-- H1 for everything else: -->
    <h1 class="text-xs-center hidden-lg-and-up">Login</h1>

    <!-- Text saying Login -->
    <v-layout align-content-center mt-5>
      <v-flex xs12>
        <v-form class="px-3" ref="form">
          <!-- Email: -->
          <!-- Input for email -->
          <v-text-field v-model="email" :rules="emailRules" label="Email:" required></v-text-field>

          <!-- Kodeord: -->
          <!-- Input for Kodeord -->
          <v-text-field
            v-model="password"
            :counter="6"
            :rules="kodeordRules"
            label="Kodeord:"
            required
          ></v-text-field>

          <p v-if="feedback">{{feedback}}</p>

          <!-- Button with Tilmeld/submit opens the site you wanted to go to-->
          <v-btn @click="login" :loading="loading">Login</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <!-- Input field for Email v-model="Email" -->
    <!-- Input field for password v-model="Password" -->

    <!-- button for login when input fields have been filled out -->
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
import BackArrow from "@/components/navigation/BackArrow";

export default {
  name: "Login",
  components: {
    BackArrow
  },
  data() {
    return {
      feedback: null,
      email: null,
      password: null
    };
  },
  methods: {
    // on-click for the button has to update/check email password
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
              this.$router.push({name: 'Home', params: {user_id: cred.user.uid}});
          }).catch(err => {
              this.feedback = err.message;
          });
          this.feedback = null;
      } else {
          this.feedback = 'Venligst udfyld begge felter';
      }
    }
  }
};
</script>

<style>
</style>
