<template>
  <div>
    <!-- back arrow to the page before -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <!-- header with Rediger Eksemplet -->
    <div class="challengeContainer">
      <!-- Header with Udfordringen name dynamic -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic mt-0"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 mt-2">Tilføj Dine Forventninger</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mt-3 mb-2">Tilføj Dine Forventninger:</h2>
    </div>

    <form-forventninger :nextPath="nextPath"></form-forventninger>
    <!-- the same button creates the forventninger -->
    <!-- <v-btn :to="{name: 'EditExampleNameAndDescrip', params: {udfordringen_id: udfordring.udfordringSlug }}">Næste</v-btn> -->

    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormForventninger from "@/components/editCreateChallenge/FormForventninger";
// import { challengeBus } from "@/main";

export default {
  name: "AddForventninger",
  components: {
    BackArrow,
    FormForventninger
  },
  data() {
    return {
      udfordring: null,
      forventninger: null,
      nextPath: {
        pathName: "EditExampleNameAndDescrip",
        paramsUdfordring: this.$route.params.udfordringen_id,
        paramsUser: this.$route.params.user_id
      }
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
  mounted() {
    // challengeBus.$on("ForventningerSubmit", forventninger => {
    // });
  }
};
</script>

<style>
</style>
