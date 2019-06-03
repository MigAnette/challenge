<template>
  <div>
    <!-- back arrow to the page edit trin -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <div class="challengeContainer">
      <!-- header with Rediger Udfordrignen -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Udfordringen</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic mt-0"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- text that says Rediger Trin  -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 mt-2">Rediger Trin 1</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Udfordringen</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Rediger Trin -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mt-3 mb-2">Rediger Trin 1</h2>
    </div>

    <v-container>
      <edit-form-trin
        :udfordring="udfordring"
        :editFormTrinNr="editFormTrinNr"
        :nextPath="nextPath"
      ></edit-form-trin>
    </v-container>

    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import EditFormTrin from "@/components/editChallenge/EditFormTrin";

export default {
  name: "EditTrin1",
  components: {
      EditFormTrin,
      BackArrow
  },
  props: {},
  data() {
    return {
      udfordring: null,
      editFormTrinNr: 1,
      nextPath: {
        pathName: "EditTrin2",
        paramsUdfordring: this.$route.params.udfordringen_id,
        paramsUser: this.$route.params.user_id
      }
    };
  },
  methods: {},
  created() {
    // get on name and description
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
</style>
