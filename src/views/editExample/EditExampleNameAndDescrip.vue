<template>
  <div>
    <!-- back arrow to add forventninger -->
    <back-arrow></back-arrow>
    <div class="challengeContainer">
    <!-- header with Rediger Eksemplet -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Rediger Navn og Beskrivelse:</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1">Rediger Navn og Beskrivelse:</h2>
    </div>
    <!-- Input field for the name with actual name -->
    <form-name-and-descrip :nameAndDescrip="udfordring"></form-name-and-descrip>
   

    <!-- button to go to next step and to edit trin -->
    <v-btn :to="{name: 'EditExampleTrin', params: {udfordringen_id: udfordring.udfordringSlug }}">Næste</v-btn>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormNameAndDescrip from "@/components/editCreateChallenge/FormNameAndDescrip";

export default {
  name: "EditExampleNameAndDescrip",
  components: {
    BackArrow,
    FormNameAndDescrip
  },
  data() {
    return {
        udfordring: null
    };
  },
  methods: {
    // create
  },
  created() {
    // get on name and description
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
