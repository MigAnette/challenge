<template>
<v-layout align-center justify-center row fill-heigh>
  <v-flex xs12 md7>

  <v-form input>
    <!-- Question -->
    <h4 class="mb-2">Hvad kan du få ud af udfordringen?</h4>
    <!-- textbox for the answer -->
    <v-textarea class="mb-3" v-model="question1" auto-grow box color="teal" label="Skriv dit svar her" rows="1"></v-textarea>

    <!-- Question -->
    <h4 class="mb-2">Hvad bekymrer dig mest ved at skulle udføre udfordringen?</h4>
    <!-- textbox for the answer -->
    <v-textarea class="mb-3" v-model="question2" auto-grow box label="Skriv dit svar her" color="teal" rows="1"></v-textarea>

    <!-- Question -->
    <h4 class="mb-2">Hvor nervøs er du for at udføre denne udfordring?</h4>
    <!-- 5 radiobuttons one can be pushed -->
    <v-layout>
        <v-flex xs6 md2>Lidt</v-flex>

        <v-flex xs6 md10 >Mest</v-flex>
      </v-layout>

  <v-layout>
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
    <h4 class="mb-2">Hvor svær tror du denne udfordring bliver?</h4>
    <!-- 5 radiobuttons one can be pushed -->
    <v-layout>
        <v-flex xs6 md2>Lidt</v-flex>

        <v-flex xs6 md10>Mest</v-flex>
      </v-layout>

<v-layout>
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
    <h4 class="mb-2">Skriv de personer der kan hjælpe dig:</h4>
    <!-- input field with add -->
    <v-text-field v-model="personText" hint="Tab for at tilføje" @keydown.tab="addPerson"></v-text-field>
  <v-layout row wrap>
    <v-btn @click="addPerson">Tilføj</v-btn>
    <!-- Added people can be seen underneath -->
  
      <div v-for="person in personer" :key="person">
        <v-chip @input="remove(person)" close>{{person}}</v-chip>
      </div>
    </v-layout>

    <!-- Added people can be removed by clicking on them -->
    <!-- 5 people max -->

    <!-- button that goes to naming and descriping the challenge -->
    <div class="btnContainer">
      <v-btn class="startChalBtn" color="teal white--text" ripple @click="submit">Næste</v-btn>
    </div>
  </v-form>
  </v-flex>
</v-layout>
</template>

<script>

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
      this.$router.push({
        name: this.nextPath.pathName,
        params: {
          udfordringen_id: this.nextPath.paramsUdfordring,
          user_id: this.nextPath.paramsUser
        }
      });
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
