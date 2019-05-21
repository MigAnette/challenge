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
      <!-- Component for trin 1 -->
      <form-trin v-for="trinet in trin" :key="trinet" :thisTrin="trinet" :udfordringen="udfordring"></form-trin>
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
        .orderBy("trinNr", "asc")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let trinet = doc.data();
            trinet.id = doc.id;
            this.trin.push(trinet);
          });
        });
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
