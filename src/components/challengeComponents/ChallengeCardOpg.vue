<template>
  <div class="mx-3 pt-2">
      <div v-for="opgave in opgaver" :key="opgave" class=" pa-auto">
          <span class="pt-1 subheading teal--text">Opgave {{opgave.opgNr}}: </span>
          <p class="pt-0 body-2"> {{opgave.opgaveNavn}} </p>
      </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "ChallengeCardOpg",
  props: ["trinene", "udfordring"],
  data() {
    return {
      opgaver: []
    };
  },
  beforeMount() {
    db.collection("eksempler")
      .doc(this.udfordring.id)
      .collection("Trin")
      .doc(this.trinene.id)
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
