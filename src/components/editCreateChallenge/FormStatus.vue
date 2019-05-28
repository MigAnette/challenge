<template>
  <v-form mt-5>
    <!-- text with Hvor mange dag skal der gå mellem notifikation? -->
    <h4>Vælg hvor mange dage der skal gå mellem status notifikationer:</h4>
    <!-- 3 radiobuttons with 1 3 and 7 underneath -->
    <v-layout>
      <v-flex xs12>
        <v-radio-group v-model="scaleQuestion1" required row>
          <v-radio value="radio-1" label="1"></v-radio>
          <v-radio value="radio-2" label="2"></v-radio>
          <v-radio value="radio-3" label="3"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <!-- text with Hvornår vil du gerne påmindes? -->
    <h4>Hvornår vil du gerne påmindes?</h4>
    <!-- header with Klokkeslæt -->
    <!-- Time picker with button to set alarm -->
    <v-time-picker color="teal" format="24hr" v-model="picker"></v-time-picker>
  </v-form>
</template>

<script>
export default {
  name: "FormStatus",
  data() {
    return {
      picker: null
    };
  }
};
</script>

<style>
</style>
