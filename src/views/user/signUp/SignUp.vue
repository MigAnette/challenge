<template>
  <div>
    <!-- Back arrow to previous page -->
    <back-arrow></back-arrow>
    <!-- header with Tilmeld for at starte udfordring -->
    <h1 class="text-xs-center hidden-md-and-down desktopH1">Tilmeld for at starte udfordring</h1>
    <!-- H1 for everything else: -->
    <h1 class="text-xs-center hidden-lg-and-up">Tilmeld for at starte udfordring</h1>
    <v-layout align-center justify-center row fill-heigh mt-5>
      <v-flex xs12 sm6 md6 lg6>
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

          <!-- Navn: -->
          <!-- Input for Navn -->
          <v-text-field v-model="navn" label="Brugernavn:" :rules="navnRules" required></v-text-field>

          <p v-if="feedback">{{feedback}}</p>

          <!-- Button with Tilmeld/submit opens the site you wanted to go to-->
          <div class="btnContainer">
            <v-btn @click="submit" class="startChalBtn" color="teal white--text">Tilmeld</v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
require("firebase/auth");
import BackArrow from "@/components/navigation/BackArrow";

export default {
  name: "SignUp",
  components: {
    BackArrow
  },
  data() {
    return {
      feedback: null,
      email: null,
      password: null,
      navn: null,
      emailRules: [
        v => !!v || "Email er påkrævet",
        v => /.+@.+/.test(v) || "Email skal være valid"
      ],
      kodeordRules: [
        v => !!v || "Kodeord er påkrævet",
        v => v.length >= 6 || "Kodeordet skal have mindst 6 karaktere"
      ],
      navnRules: [v => !!v || "Navn er påkrævet"],
      udfordring: null,
      userId: null
    };
  },
  methods: {
    // on sumbit add user to authentication and add to firestore database with uid
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          db.collection("users")
            .doc(cred.user.uid)
            .set({
              email: this.email,
              brugerNavn: this.navn
            });
          
          this.userId = cred.user.uid;
        })
        .then(() => {
          this.$router.push({
            name: "AddForventninger",
            params: {
              udfordringen_id: this.udfordring.udfordringSlug,
              user_id: this.userId
            }
          });
        })
        .catch(err => {
          this.feedback = err.message;
        });
    }
  },
  created() {
    let ref = db
      .collection("eksempler")
      .where("udfordringSlug", "==", this.$route.params.udfordringen_id);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.udfordring = doc.data();
        this.udfordring.id = doc.id;
      });
    });
  }
};
</script>

<style>
</style>
