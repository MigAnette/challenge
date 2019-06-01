<template>
  <v-layout wrap row>
    <v-flex mt-3 v-for="opgave in opgaver" :key="opgave">
      <h4>Opgave {{opgave.opgNr}}</h4>
      <v-textarea
        auto-grow
        required
        rows="1"
        outline
        :label='"Navn på opgave " + opgave.opgNr'
        v-model="opgave.opgaveNavn"
      ></v-textarea>
      <h5>Vælg en person der kan hjælpe med opgaven:</h5>
      <v-select label="Person" :items="personer" v-model="select.person_id[opgave.opgNr]"></v-select>
    </v-flex>    
  </v-layout>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "FormTrinOpg",
  props: ["trinet", "udfordring"],
  data() {
    return {
      opgaver: [],
      personer: ["Brian", "Hanne", "Emma", "Bjarne", "Oliver"],
      opgaveNavn: [],
      select: {
        person_id: []
      },
      personData: {
        question1: null
      }
    };
  },
  methods: {},
  created() {
    db.collection("eksempler")
      .doc(this.udfordring.id)
      .collection("Trin")
      .doc(this.trinet.id)
      .collection("opgaver")
      .orderBy("opgNr", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let opgave = doc.data();
          opgave.id = doc.id;
          this.opgaver.push(opgave);
        });
      });
  }
};
</script>

<style>
</style>
