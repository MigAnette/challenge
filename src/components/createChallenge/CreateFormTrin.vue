<template>
  <v-form>
    <v-flex mt-5>
      <h2>Trin  {{trin}} </h2>
      <v-textarea auto-grow required rows="1" :label='"Navn på trin " + trin' v-model="trinNavn"></v-textarea>
    </v-flex>

    <v-layout wrap row>
      <v-flex mt-3 v-for="opgave in opgaver" :key="opgave">
        <h4>Opgave {{opgave}}</h4>
        <v-textarea auto-grow required rows="1" outline :label='"Navn på opgave " + opgave'></v-textarea>
        <h5>Vælg en person der kan hjælpe med opgaven:</h5>
        <v-select label="Person" :items="personer" v-model="select.person_id[opgave]"></v-select>
      </v-flex>
    </v-layout>

    <!-- button to go to finish making trin1 -->
    <div class="btnContainer">
      <v-btn class="startChalBtn" color="teal white--text" ripple @click="submit">Næste</v-btn>
    </div>
  </v-form>
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
