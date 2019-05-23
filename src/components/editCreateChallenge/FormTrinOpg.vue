<template>
  <v-layout wrap row>
    <v-flex mt-3 v-for="opgave in opgaver" :key="opgave">
      <h4>Opgave {{opgave.opgNr}}</h4>
      <v-textarea auto-grow required outline :label='"Navn på opgave " + opgave.opgNr' v-model="opgave.opgaveNavn"></v-textarea>
      <h5>Vælg person en der kan hjælpe med opgaven:</h5>
      <v-select label="Person" :items="items" v-model="select.person_id[opgave.opgNr]"></v-select>
    </v-flex>

    <v-btn @click="submit">Næste</v-btn>
  </v-layout>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "FormTrinOpg",
  props: ["trinet", "udfordring", "nextPath"],
  data() {
    return {
      opgaver: [],
      items: ["Brian", "Klaus", "Trine", "Ditte", "Martin"],
      opgaveNavn: [],
      select: {
        person_id: []
      }
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
    }
  },
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
