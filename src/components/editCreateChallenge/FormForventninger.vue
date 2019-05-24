<template>
  <v-form input>
    <!-- Question -->
    <h4>Hvad kan du få ud af udfordringen?</h4>
    <!-- textbox for the answer -->
    <v-textarea v-model="question1" auto-grow box color="teal" label="Skriv dit svar her" rows="1"></v-textarea>

    <!-- Question -->
    <h4>Hvad bekymrer dig mest ved at skulle udføre udfordringen?</h4>
    <!-- textbox for the answer -->
    <v-textarea v-model="question2" auto-grow box label="Skriv dit svar her" color="teal" rows="1"></v-textarea>

    <!-- Question -->
    <h4>Hvor nervøs er du for at udføre denne udfordring?</h4>
    <!-- 5 radiobuttons one can be pushed -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout>
          <p>Lidt</p>
          <p>Mest</p>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-radio-group v-model="scaleQuestion1" :mandatory="true" row>
          <v-radio value="radio-1"></v-radio>
          <v-radio value="radio-2"></v-radio>
          <v-radio value="radio-3"></v-radio>
          <v-radio value="radio-4"></v-radio>
          <v-radio value="radio-5"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>

    <!-- Question -->
    <h4>Hvor svær tror du denne udfordring bliver?</h4>
    <!-- 5 radiobuttons one can be pushed -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout>
          <p>Lidt</p>
          <p>Mest</p>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-radio-group v-model="scaleQuestion2" :mandatory="true" row>
          <v-radio value="radio-1"></v-radio>
          <v-radio value="radio-2"></v-radio>
          <v-radio value="radio-3"></v-radio>
          <v-radio value="radio-4"></v-radio>
          <v-radio value="radio-5"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <!-- Header with person -->
    <h4>Skriv de personer der kan hjælpe dig:</h4>
    <!-- input field with add -->
    <v-text-field v-model="personText"></v-text-field>

    <v-btn @click="addPerson">Tilføj</v-btn>
    <!-- Added people can be seen underneath -->
    <v-layout row wrap>
      <div v-for="person in personer" :key="person">
        <v-chip @input="remove(person)" close>{{person}}</v-chip>
      </div>
    </v-layout>

    <!-- Added people can be removed by clicking on them -->
    <!-- 5 people max -->

    <!-- button that goes to naming and descriping the challenge -->
    <v-btn @click="submit">Næste</v-btn>
  </v-form>
</template>

<script>
// import {challengeBus} from "@/main";

export default {
  name: "FormForventninger",
  props: ["nextPath"],
  data() {
    return {
      question1: "",
      question2: "",
      scaleQuestion1: "",
      scaleQuestion2: "",
      personText: "",
      personer: []
    };
  },
  methods: {
    submit() {
      const forventninger = {
        question1: this.question1,
        question2: this.question2,
        scaleQuestion1: this.scaleQuestion1,
        scaleQuestion2: this.scaleQuestion2,
        personer: this.personer
      };
      this.$emit("submit", forventninger);
      this.$router.push({name: this.nextPath.pathName, params: {udfordringen_id: this.nextPath.paramsUdfordring, user_id: this.nextPath.paramsUser}});
    },
    addPerson() {
      let text = this.personText.trim();
      if (text && this.personer.length < 5) {
        this.personer.push(text);
        this.personText = "";
      }
    },
    remove(item) {
      this.personer.splice(this.personer.indexOf(item), 1);
    }
  }
};
</script>

<style>
</style>
