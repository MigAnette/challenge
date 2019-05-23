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
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Rediger Trin 1</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1">Rediger Trin</h2>
    </div>

    <v-container>
      <form-trin :udfordring="udfordring" :formTrinNr="formTrinNr" :nextPath="nextPath"></form-trin>
    </v-container>
    <!-- button to go to finish making trin -->
  
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
      formTrinNr: 3,
      nextPath: {
        pathName: "EditExampleStatusPlan",
        paramsUdfordring: this.$route.params.udfordringen_id,
        paramsUser: this.$route.params.user_id,
      } 
    };
  },
  methods: {
    
   
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
        })
      
      });
  }
};
</script>

<style>
</style>
