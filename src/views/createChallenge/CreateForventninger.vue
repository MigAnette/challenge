<template>
  <div>
    <!-- back arrow to the page before -->
    <back-arrow></back-arrow>
    <!-- header with Rediger Eksemplet -->
    <div class="challengeContainer">
      <!-- Header with Udfordringen name dynamic -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Tilføj Dine Forventninger</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1">Tilføj Dine Forventninger:</h2>
    </div>

    <form-forventninger v-model="forventninger"></form-forventninger>
    <!-- the same button creates the forventninger -->
    <!-- <v-btn :to="{name: 'EditExampleNameAndDescrip', params: {udfordringen_id: udfordring.udfordringSlug }}">Næste</v-btn> -->

    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormForventninger from "@/components/editCreateChallenge/FormForventninger";

export default {
  name: "AddForventninger",
  components: {
    BackArrow,
    FormForventninger
  },
  data() {
    return {
      udfordring: null,
      forventninger: null
    };
  },
  methods: {
    // on-click event that creates forventninger in the right spot
    // / if forventninger exists they have to be updated instead
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
  },
  
};
</script>

<style>
</style>
