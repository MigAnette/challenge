<template>
  <v-form>
    <v-flex mt-5>
      <h2>Trin {{thisTrin.trinNr}}:</h2>
      <v-text-field :label='"Navn på trin " + thisTrin.trinNr'></v-text-field>
    </v-flex>

   
  </v-form>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "FormTrin",
  data() {
    return {
      items: ["Brian", "Klaus", "Trine", "Ditte", "Martin"],
      opgaver: []
    };
  },
  beforeMount() {
    db.collection("eksempler")
      .doc(this.udfordringen.id)
      .collection("Trin")
      .doc(this.thisTrin.id)
      .collection("opgaver").orderBy("opgNr", "asc")
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
