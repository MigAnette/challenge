<template>
  <v-layout align-center justify-center row fill-heigh>
      <v-flex xs12 md7>
  <v-form>
      <h2>Trin  {{trin}} </h2>
      <v-textarea auto-grow required rows="1" :label='"Navn på trin " + trin' v-model="trinNavn"></v-textarea>
    

    <v-layout wrap row>
      <v-flex xs12 mt-3 v-for="opgave in opgaver" :key="opgave">
        <h4 class="teal--text mb-2">Opgave {{opgave}}</h4>
        <v-textarea auto-grow required rows="1" outline :label='"Navn på opgave " + opgave'></v-textarea>
        <h5>Vælg en person der kan hjælpe med opgaven:</h5>
        <v-select label="Person" class="mb-2" :items="personer" v-model="select.person_id[opgave]"></v-select>
      </v-flex>
    </v-layout>

    <!-- button to go to finish making trin1 -->
    <div class="btnContainer">
      <v-btn class="startChalBtn" color="teal white--text" ripple @click="submit">Næste</v-btn>
    </div>
  </v-form>
  </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: "CreateFormTrin",
  props: ["nextPath", "trin"],
  data() {
    return {
      opgaver: [1, 2, 3],
      personer: ["Brian", "Hanne", "Emma", "Bjarne", "Oliver"],
      select: {
        person_id: []
      },
      trinNavn: null
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: this.nextPath.pathName,
        params: {
          user_id: this.nextPath.paramsUser
        }
      });
    }
  }
};
</script>

<style>
</style>
