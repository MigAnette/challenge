<template>
  <div>
    <!-- back arrow to createforventninger -->
    <back-arrow></back-arrow>
    <div class="challengeContainer">
      <!-- header with Lav din egen udfordring -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Lav Udfordring</h1>
      <!-- text that says Giv din udfordring et navn og en beskrivelse -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 teal--text">Giv udfordringen et navn</h2>

         <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Lav Udfordring</h1>
      <h2 class="text-xs-center hidden-lg-and-up smallH1 teal--text">Giv udfordringen et navn</h2>
    </div>

    <v-form>
    <!-- header with Navn: -->
    <h4>Navn:</h4>
    <!-- Input field for the name with actual name -->
    <v-text-field v-model="udfordringNavn" required label="Navn på udfordring"></v-text-field>
    <!-- header with Beskrivelse: -->
    <h4>Beskrivelse:</h4>
    <!-- textbox for the description-->
    <v-textarea
      outline
      auto-grow
      label="Beskriv din udfordring"
      v-model="udfordringBeskriv"
    ></v-textarea>

    <div class="btnContainer">
      <v-btn class="startChalBtn" :to="{name: 'CreateTrin1', params: {user_id: this.$route.params.user_id}}" color="teal white--text" ripple>Næste</v-btn>
    </div>
  </v-form>
    <!-- button to go to next step and to create the name and description -->
  </div>
</template>

<script>
import BackArrow from "@/components/navigation/BackArrow";


export default {
  name: "CreateNameAndDescrip",
  components: {
    BackArrow,
  },
  data() {
    return {
        udfordringNavn: null,
        udfordringBeskriv: null
      
    };
  },
  methods: {
    // onclick event on button that creates name and description
    // if the name and description has been made you can update
  },
  created() {
    // get the name and description
  }
};
</script>

<style>
</style>
