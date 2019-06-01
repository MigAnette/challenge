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

      <!-- H1 for everything else: -->

      <h1 class="hidden-lg-and-up smallH1">Status</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text">{{udfordring.udfordringNavn}}</h1>
    </div>

    <v-container>
      <!-- text with Har du løst {{opgave}} -->
      <h2 class="pt-5 pb-2">Har du løst opgave 3?</h2>
      <!-- selector with ja og nej -->
      <v-select :items="items" placeholder="Ja"></v-select>
      <!-- this has to be hooked up to an update switch based on the answer -->

      <!-- button that goes to next status page and sends update on the boolean ja eller nej -->
      <div class="btnContainer pt-5">
        <v-btn
          class="startChalBtn"
          color="teal white--text"
          ripple
          :to="{name: 'StatusReflect', params: {udfordringen_id: udfordring.udfordringSlug, user_id: this.$route.params.user_id}}"
        >Næste</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";

export default {
  name: "StatusOpg",
  components: {
    BackArrow
  },
  data() {
    return {
      udfordring: null,
      items: ["Ja", "Nej"]
    };
  },
  methods: {
    // onclick update database for boolean
  },
  created() {
    // get udfordringer
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
