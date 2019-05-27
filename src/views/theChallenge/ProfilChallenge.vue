<template>
  <div>
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
    <div class="challengeContainer">
      <h1 class="text-xs-center hidden-md-and-down desktopH1">{{udfordring.udfordringNavn}}</h1>

      <!-- H1 for everything else: -->

      <h1 class="hidden-lg-and-up smallH1">{{udfordring.udfordringNavn}}</h1>

      <!-- text with the description of the challenge -->

      <p class="challengeText body-1">{{udfordring.udfordringDescrip}}</p>
    </div>

    <!-- statusbar if it was made -->

    <!-- button to a page with Forventninger, it says se forventninger -->

    <v-btn v-if="notExamples"></v-btn>

    <!-- Boxes with the different steps v-for -->

    <profil-challenge-card :udfordringen="udfordring"></profil-challenge-card>

    <!-- button to start udfordring -->
    <div class="btnContainer">
      <v-btn
        :to="{name: 'Home', params: {user_id: this.$route.params.user_id}}"
        color="teal white--text"
        ripple
        class="pt-6 startChalBtn"
      >
        <span>Start udfordring her</span>
      </v-btn>
    </div>


    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import SettingChallenge from "@/components/settings/SettingChallenge";
import ProfilChallengeCard from "@/components/challengeComponents/ProfilChallengeCard";

export default {
  name: "Challenge",
  components: {
    BackArrow,
    SettingChallenge,
    ProfilChallengeCard
  },
  data() {
    return {
      udfordring: null,
    };
  },
  created() {
    // get udfordringen
    let ref = db
      .collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
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
.challengeContainer,
.btnContainer {
  display: grid;
}

.startChalBtn {
  justify-self: center;
}

.navProtector {
  height: 10vh;
  bottom: 0;
}

h1,
p {
  justify-self: center;
}
</style>
