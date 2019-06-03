<template>
  <v-layout align-center justify-center row fill-heigh>
    <v-flex xs12 md7>
      <v-form mt-5>
        <!-- text with Hvor mange dag skal der gå mellem notifikation? -->
        <h4 class="mb-2 mt-3">Vælg hvor mange dage der skal gå mellem status notifikationer:</h4>
        <!-- 3 radiobuttons with 1 3 and 7 underneath -->
        <v-layout align-center justify-center row fill-heigh>
          <v-flex xs12>
            <v-radio-group required row>
              <v-radio value="radio-1" label="1"></v-radio>
              <v-radio value="radio-2" label="3"></v-radio>
              <v-radio value="radio-3" label="7"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
        <!-- text with Hvornår vil du gerne påmindes? -->
        <h4 class="mb-2 mt-3">Hvornår vil du gerne påmindes?</h4>
        <!-- header with Klokkeslæt -->
        <!-- Time picker with button to set alarm -->
        <v-flex>
          <v-time-picker width="250" class="mb-3" color="teal" format="24hr" v-model="picker"></v-time-picker>
        </v-flex>
      </v-form>
    </v-flex>
  </v-layout>
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
