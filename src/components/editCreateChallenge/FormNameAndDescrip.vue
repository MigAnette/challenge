<template>
  <v-form>
    <!-- header with Navn: -->
    <h4>Navn:</h4>
    <!-- Input field for the name with actual name -->
    <v-text-field v-model="nameAndDescrip.udfordringNavn" required label="Navn på udfordring"></v-text-field>
    <!-- header with Beskrivelse: -->
    <h4>Beskrivelse:</h4>
    <!-- textbox for the description with acutal description-->
    <v-textarea outline auto-grow label="Beskriv din udfordring" v-model="nameAndDescrip.udfordringDescrip"></v-textarea>

    <v-btn @click="submit">Næste</v-btn>
  </v-form>
</template>

<script>
import { challengeBus } from "@/main";

export default {
  name: "FormNameAndDescrip",
  props: ["nameAndDescrip", "nextPath"],
  data() {
    return {
      nameAndDescrip: null,
    };
  },
  methods: {
    submit() {
      const nameAndDescrip = {
        nameAndDescrip: this.nameAndDescrip
      };
      this.$emit("submit", nameAndDescrip);
      this.$router.push({
        name: this.nextPath.pathName,
        params: {
          udfordringen_id: this.nextPath.paramsUdfordring,
          user_id: this.nextPath.paramsUser,
          trin_nr: this.nextPath.paramsTrin
        }
      });
    }
  }
};
</script>

<style>
</style>
