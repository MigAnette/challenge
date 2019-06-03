<template>
  <div>
    <v-toolbar class="hidden-md-and-up" flat color="transparent"></v-toolbar>
    <!-- Header with the challenge name dynamically showing -->
    <div class="challengeContainer">
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Din udfordring:</h2>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text mt-0"
      >{{udfordring.udfordringNavn}}</h1>

      <!-- H1 for everything else: -->

      <h2 class="hidden-lg-and-up smallH1">Din udfordring:</h2>
      <h1 class="hidden-lg-and-up smallH1 teal--text">{{udfordring.udfordringNavn}}</h1>
    </div>

    <home-trin-card class="mt-4 mb-4" :udfordring="udfordring"></home-trin-card>
    <!-- status bar(wait for last to make) -->

    <v-layout row wrap align-center justify-center fill-height>
      <img class="center" src="@/assets/TomStatusBar.png">
    </v-layout>

    <v-layout row wrap align-center justify-center fill-height>
      <div class="challengeContainer">
        <h3 class="hidden-md-and-down mt-5 desktopH1">Sidste Statusopdateringer</h3>

        <!-- H1 for everything else: -->
        <h3 class="hidden-lg-and-up mt-5 smallH1">Sidste Statusopdateringer</h3>

        <p
          class="font-weight-light font-italic mb-4"
        >De sidste 3 statusopdateringer, når du har lavet status på din udfordring</p>
      </div>
    </v-layout>
    <!-- last statusupdate: three boxes with the latest added on top(date filter) v-for 3 -->

    <!-- button :to={name: status} for Gør Status: opens new page Status(opgave) -->
    <div class="btnContainer">
      <v-btn
        :to="{name: 'StatusOpg', params: {udfordringen_id: udfordring.udfordringSlug, user_id: this.$route.params.user_id}}"
        color="teal white--text"
        ripple
        pulse
        class="startChalBtn"
      >Gør Status</v-btn>
    </div>
    <!-- button with a plus sign that goes to Lav en udfordring -->
    <v-btn
      fab
      color="teal"
      dark
      absolute
      right
      :to=" {name: 'CreateForventninger', params: {user_id: this.$route.params.user_id}} "
    >
      <v-icon dark large>add</v-icon>
    </v-btn>

    <div class="navProtector hidden-lg-only"></div>
    <div class="navProtector hidden-lg-only"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import HomeTrinCard from "@/components/homeComponents/HomeTrinCard";

export default {
  name: "Home",
  components: {
    HomeTrinCard
  },
  props: {},
  data() {
    return {
      udfordring: null
    };
  },
  created() {
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
