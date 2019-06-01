<template>
  <div>
    <!-- back arrow to profile -->

    <back-arrow></back-arrow>
    <!-- header with Lav Statusplan -->
    <div class="challengeContainer">
      <!-- header with Rediger Eksemplet -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Udfordringen</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Rediger Forventninger</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Udfordringen</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mb-3">Rediger Forventninger</h2>
    </div>

    <v-form input>
      <!-- Question -->
      <h4>Hvad kan du få ud af udfordringen?</h4>
      <!-- textbox for the answer -->
      <v-textarea
        v-model="question1"
        auto-grow
        box
        color="teal"
        label="Skriv dit svar her"
        rows="1"
      ></v-textarea>

      <!-- Question -->
      <h4>Hvad bekymrer dig mest ved at skulle udføre udfordringen?</h4>
      <!-- textbox for the answer -->
      <v-textarea
        v-model="question2"
        auto-grow
        box
        label="Skriv dit svar her"
        color="teal"
        rows="1"
      ></v-textarea>

      <!-- Question -->
      <h4>Hvor nervøs er du for at udføre denne udfordring?</h4>
      <!-- 5 radiobuttons one can be pushed -->
      <v-layout>
        <v-flex xs6 md2>Lidt</v-flex>

        <v-flex xs6 md10>Mest</v-flex>
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
      <h4>Hvor svær tror du denne udfordring bliver?</h4>
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
      <h4>Skriv de personer der kan hjælpe dig:</h4>
      <!-- input field with add -->
      <v-text-field v-model="personText"></v-text-field>
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
    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";

export default {
  name: "EditForventninger",
  components: {
      BackArrow,
  },
  data() {
    return {
        udfordring: null
    };
  },
  methods: {
    // onclick will update database even if the text havent been changed
  },
   created() {
    let ref = db
      .collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .where("udfordringSlug", "==", this.$route.params.udfordringen_id);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.udfordring = doc.data();
        this.udfordring.id = doc.id;
      });
    });
  },
};
</script>

<style>
</style>
