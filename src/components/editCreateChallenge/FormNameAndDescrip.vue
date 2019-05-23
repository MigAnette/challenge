<template>
  <v-form>
    <!-- header with Navn: -->
    <h4>Navn:</h4>
    <!-- Input field for the name with actual name -->
    <v-text-field v-model="udfordringName" required label="Navn på udfordring"></v-text-field>
    <!-- header with Beskrivelse: -->
    <h4>Beskrivelse:</h4>
    <!-- textbox for the description with acutal description-->
    <v-textarea outline auto-grow label="Beskriv din udfordring" v-model="udfordringDescrip"></v-textarea>

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
      udfordringName: this.nameAndDescrip.udfordringNavn,
      udfordringDescrip: this.nameAndDescrip.udfordringDescrip
    };
  },
  methods: {
    submit() {
      const nameAndDescrip = {
        udfordringName: this.navn,
        udfordringDescrip: this.udfordringDescrip
      };
      challengeBus.$emit("NameAndDescripSubmit", nameAndDescrip);
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
