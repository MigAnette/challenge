<template>
  <v-layout align-center justify-center row fill-heigh>
    <v-flex xs12 md7>
      <v-form>
        <!-- header with Navn: -->
        <h4 class="mb-2">Navn:</h4>
        <!-- Input field for the name with actual name -->
        <v-text-field v-model="nameAndDescrip.udfordringNavn" required label="Navn på udfordring"></v-text-field>
        <!-- header with Beskrivelse: -->
        <h4 class="mb-2">Beskrivelse:</h4>
        <!-- textbox for the description with acutal description-->
        <v-textarea
          outline
          auto-grow
          label="Beskriv din udfordring"
          v-model="nameAndDescrip.udfordringDescrip"
        ></v-textarea>

        <div class="btnContainer">
          <v-btn class="startChalBtn" color="teal white--text" ripple @click="submit">Næste</v-btn>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
// import { challengeBus } from "@/main";

export default {
  name: "FormNameAndDescrip",
  props: ["nameAndDescrip", "nextPath"],
  data() {
    return {
     
    };
  },
  methods: {
    submit() {
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
