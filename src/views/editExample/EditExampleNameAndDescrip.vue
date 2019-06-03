<template>
  <div>
    <!-- back arrow to add forventninger -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <div class="challengeContainer">
      <!-- header with Rediger Eksemplet -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 font-italic mt-0 teal--text"
      >{{udfordring.udfordringNavn}}</h1>
      <!-- header with Navn & Beskrivelse -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 mt-2">Rediger Navn og Beskrivelse:</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic teat--text">{{udfordring.udfordringNavn}}</h1>

      <!-- header with Navn & Beskrivelse -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mt-3 mb-2">Rediger Navn og Beskrivelse:</h2>
    </div>
    <!-- Input field for the name with actual name -->
    <form-name-and-descrip :nameAndDescrip="udfordring" :nextPath="nextPath"></form-name-and-descrip>

    <!-- button to go to next step and to edit trin -->
    <!-- :to="{name: 'EditExampleTrin', params: {udfordringen_id: udfordring.udfordringSlug } -->
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
      udfordring: null,
      nextPath: {
        pathName: "EditExampleTrin1",
        paramsUdfordring: this.$route.params.udfordringen_id,
        paramsUser: this.$route.params.user_id,
        paramsTrin: 1
      }
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
