<template>
  <v-form>
    <v-flex mt-5>
      <h2>Trin {{thisTrin.trinNr}}:</h2>
      <v-text-field :label='"Navn på trin " + thisTrin.trinNr' v-model="thisTrin.trinNavn "></v-text-field>
    </v-flex>

    
    <v-flex mt-3 v-for="opgave in opgaver" :key="opgave">
      <h4>Opgave {{opgave.opgNr}} </h4>
      <v-textarea auto-grow required outline label="Navn på opgave" v-model="opgave.opgaveNavn"></v-textarea>
      <h5>Vælg person en der kan hjælpe med opgaven:</h5>
      <v-select label="Person" :items="items" v-model="select.person_id[opgave.opgNr]"></v-select>
    </v-flex>
    
  </v-form>
</template>

<script>
import db from "@/firebase/init";


export default {
  name: "FormTrin",
  props: ["thisTrin", "udfordringen"],
  data() {
    return {
      items: ["Brian", "Klaus", "Trine", "Ditte", "Martin"],
      opgaver: [],
      select: {
          person_id: []
      } 
    
      
    };
  },
  beforeMount() {
    db.collection("eksempler")
      .doc(this.udfordringen.id)
      .collection("Trin")
      .doc(this.thisTrin.id)
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
