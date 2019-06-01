<template>
  <div>
    <!-- back arrow going to Home page -->
    <v-toolbar flat color="transparent">
      <back-arrow></back-arrow>
    </v-toolbar>
    <!-- Header with Status -->
    <div class="challengeContainer pb-5">
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Status</h1>
      <h1
        class="text-xs-center hidden-md-and-down teal--text"
      >{{udfordring.udfordringNavn}}</h1>
      <h1 class="text-xs-center hidden-md-and-down">Aftal et møde med træner</h1>
        
      <!-- H1 for everything else: -->

      <h1 class="hidden-lg-and-up smallH1">Status</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text">{{udfordring.udfordringNavn}}</h1>
      <h1 class="hidden-lg-and-up smallH1">Aftal et møde med træner</h1>
    </div>
    <v-form input>
      <!-- Question for the status -->
      <h4>Hvad har du fået ud af opgaven?</h4>
      <!-- textbox for the answer -->
      <v-textarea auto-grow rows="2" box color="teal" label="Skriv dit svar her"></v-textarea>

      <!-- Question for the status -->
      <h4>Hvad har du lært om dig selv i løbet af denne opgave?</h4>
      <!-- textbox for the answer -->
      <v-textarea auto-grow rows="2" box color="teal" label="Skriv dit svar her"></v-textarea>

      <!-- Question for the status -->
      <h4>Hvor svær er/var opgaven?</h4>
      <!-- 5 radiobuttons to choose if it was good or bad -->

      <v-layout>
        <v-flex xs6 md2>Lidt</v-flex>

        <v-flex xs6 md10>Mest</v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <v-radio-group v-model="scaleQuestion1" :mandatory="true" row>
            <v-radio value="radio-1"></v-radio>
            <v-radio value="radio-2"></v-radio>
            <v-radio value="radio-3"></v-radio>
            <v-radio value="radio-4"></v-radio>
            <v-radio value="radio-5"></v-radio>
          </v-radio-group>
        </v-flex>
      </v-layout>

      <!-- button that finishes the status and goes back to home -->
      <div class="btnContainer pt-5">
        <v-btn
          class="startChalBtn"
          color="teal white--text"
          ripple
          :to="{name: 'Home', params: {udfordringen_id: udfordring.udfordringSlug, user_id: this.$route.params.user_id}}"
        >Færdig</v-btn>
      </div>

      <!-- the button will send the questions answered to the database -->
    </v-form>
    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";

export default {
  name: "StatusReflect",
  components: {
    BackArrow
  },
  data() {
    return {
      udfordring: null
    };
  },
  methods: {
    // onclick button create new document in database
  },
  created() {
    db.collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .where("udfordringBegun", "==", true)
      .get()
      .then(snapshot => {
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
