<template>
  <div>
    <!-- back arrow to the page edit example name and description -->
    <back-arrow></back-arrow>
    <!-- header with Rediger din egen udfordring -->
    <!-- header with Rediger trin -->
    <div class="challengeContainer">
      <!-- Header with Udfordringen name dynamic -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Rediger Trin</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1">Rediger Trin</h2>
    </div>

    <v-container>
      <v-form>
    <v-flex mt-5>
      <h2>Trin {{thisTrin.trinNr}}:</h2>
      <v-text-field :label='"Navn på trin " + thisTrin.trinNr' v-model="thisTrin.trinNavn "></v-text-field>
    </v-flex>

    
    <v-flex mt-3>
      <h4>Opgave {{opgave.opgNr}} </h4>
      <v-textarea auto-grow required outline label="Navn på opgave" v-model="opgave.opgaveNavn"></v-textarea>
      <h5>Vælg person en der kan hjælpe med opgaven:</h5>
      <v-select label="Person" :items="items" v-model="select.person_id[opgave.opgNr]"></v-select>
    </v-flex>
    
  </v-form>
    </v-container>
    <!-- button to go to finish making trin -->
    <v-btn :to="{name: 'EditExampleStatusPlan', params: {udfordringen_id: udfordring.udfordringSlug }}">Næste</v-btn>
    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormTrin from "@/components/editCreateChallenge/FormTrin";

export default {
  name: "EditExampleTrin",
  components: {
    BackArrow,
    FormTrin
  },
  data() {
    return {
      udfordring: null,
      trin: []
    };
  },
  methods: {
    callTrin() {
      db.collection("eksempler")
        .doc(this.udfordring.id)
        .collection("Trin")
        .where("trinSlug", '==', this.$route.params.trin_navn)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let trinet = doc.data();
            trinet.id = doc.id;
          });
        });
    },
    sendDataFirebse() {
      db.collection("users").doc(uid).collection('udfordringer').add()
    }
  },
  created() {
    let ref = db
      .collection("eksempler")
      .where("udfordringSlug", "==", this.$route.params.udfordringen_id);

    ref
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.udfordring = doc.data();
          this.udfordring.id = doc.id;
        });
      })
      .then(() => {
        return this.callTrin();
      });
  }
};
</script>

<style>
</style>
