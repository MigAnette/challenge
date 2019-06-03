<template>
  <div>
    <!-- back arrow to the page before -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <!-- header with Rediger Eksemplet -->
    <div class="challengeContainer">
      <!-- Header with Udfordringen name dynamic -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Lav Udfordring</h1>
    
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 teal--text mt-0">Tilføj Dine Forventninger</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Lav Udfordring</h1>
      

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 teal--text mb-2">Tilføj Dine Forventninger:</h2>
    </div>

    <form-forventninger :nextPath="nextPath" ></form-forventninger>

    <div class="navProtector"></div>
  </div>
</template>

<script>
import BackArrow from "@/components/navigation/BackArrow";
import FormForventninger from "@/components/editCreateChallenge/FormForventninger";

export default {
  name: "AddForventninger",
  components: {
    BackArrow,
    FormForventninger
  },
  data() {
    return {
       nextPath: {
        pathName: "CreateNameAndDescrip",
        paramsUser: this.$route.params.user_id
      }
    };
  },
  methods: {
    // on-click event that creates forventninger in the right spot
    // / if forventninger exists they have to be updated instead
  },
  created() {

  },
  
};
</script>

<style>
</style>
