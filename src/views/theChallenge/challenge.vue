<template>
  <div class="challengeContainer">
    <!-- back arrow that goes to the page before top left corner -->
    <v-toolbar flat color="transparent">
      <back-arrow></back-arrow>
      <v-spacer></v-spacer>
      <!-- gear icon that shows a modal with editing the challenge and deleting the challenge -->
      <!-- component -->

      <setting-challenge></setting-challenge>
    </v-toolbar>

    <!-- Header with Udfordringen name dynamic -->
    <!-- H1 for desktop: -->

    <h1 class="text-xs-center hidden-md-and-down desktopH1">{{udfordring.udfordringNavn}}</h1>

    <!-- H1 for everything else: -->

    <h1 class="hidden-md-and-up smallH1">{{udfordring.udfordringNavn}}</h1>

    <!-- text with the description of the challenge -->

    <p class="challengeText body-1">{{udfordring.udfordringDescrip}}</p>

    <!-- statusbar if it was made -->

    <!-- button to a page with Forventninger, it says se forventninger -->
    <v-btn v-if="false"></v-btn>

    <!-- Boxes with the different steps v-for -->
 
        <challenge-card:udfordringen="udfordring"></challenge-card>
    
    <!-- Trin -->
    <!-- opgave 1 -->
    <!-- opgave 2 -->
    <!-- opgave 3 -->
    <!-- show if the step is complete with a checkmark  -->

    <!-- button to start udfordring -->
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import SettingChallenge from "@/components/settings/SettingChallenge";
import ChallengeCard from "@/components/challengeComponents/ChallengeCard";

export default {
  name: "Challenge",
  components: {
    BackArrow,
    SettingChallenge,
    ChallengeCard
  },
  data() {
    return {
      udfordring: [],
    };
  },
  created() {
    // get udfordringen
    let ref = db
      .collection("eksempler")
      .where("udfordringSlug", "==", this.$route.params.udfordringen_id);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.udfordring = doc.data();
        this.udfordring.id = doc.id;
      });
    });

    // name
    // description
    // get trin
    // opgaver
  },
  
};
</script>

<style>
.challengeContainer {
  display: grid;
}

h1,
p {
  justify-self: center;
}
</style>
