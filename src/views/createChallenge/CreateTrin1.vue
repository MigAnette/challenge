<template>
  <div>
    <!-- back arrow to the page create name and description -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <div class="challengeContainer">
      <!-- header with Lav din egen udfordring -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Lav Udfordring</h1>
      <!-- text that says Giv din udfordring et navn og en beskrivelse -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 teal--text mt-0">Trin og opgaver</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Lav Udfordring</h1>
      <h2 class="text-xs-center hidden-lg-and-up smallH1 teal--text mb-2">Trin og opgaver</h2>
    </div>

    <v-container>
     
        <create-form-trin :nextPath="nextPath" :trin="trin"></create-form-trin>
      
    </v-container>

    <div class="navProtector"></div>
  </div>
</template>

<script>
import BackArrow from "@/components/navigation/BackArrow";
import CreateFormTrin from "@/components/createChallenge/CreateFormTrin";

export default {
  name: "CreateTrin",
  components: {
    BackArrow,
    CreateFormTrin
  },
  props: {},
  data() {
    return {
      trin: 1,
      nextPath: {
        pathName: "CreateTrin2",
        paramsUser: this.$route.params.user_id
      }
    };
  },
  methods: {}
};
</script>

<style>
</style>
