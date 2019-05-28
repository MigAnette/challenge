<template>
  <div>
    <!-- back arrow to the page edit example Trin -->
    <back-arrow></back-arrow>
    <!-- header with Lav Statusplan -->
    <div class="challengeContainer">
      <!-- header with Rediger Eksemplet -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Lav Statusplan</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mb-3">Lav Statusplan</h2>
    </div>
    <v-container>
      <form-status></form-status>
    </v-container>

    <!-- Button with Start Udfordring / which both saves(creates) and starts(link to home) challenge -->
    <div class="btnContainer">
      <v-btn
        class="startChalBtn"
        color="teal white--text"
        ripple
        @click="startAndSave()"
      >Start Udfordring</v-btn>
    </div>

    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormStatus from "@/components/editCreateChallenge/FormStatus";

export default {
  name: "EditExampleStatusPlan",
  components: {
    BackArrow,
    FormStatus
  },
  data() {
    return {
      udfordring: null
    };
  },
  methods: {
    // on start udfordring and Gem udfordring
    // both have to compile and create the data in the right way
    sendToFirebase() {
      db.collection("users");
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
