<template>
  <div>
      <div v-for="opgave in opgaver" :key="opgave">
          <span>Opgave {{opgave.opgaveNr}}: </span>
          <p> {{opgave.opgaveNavn}} </p>
      </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "ChallengeCardOpg",
  props: ["trinet", "udfordringen"],
  data() {
    return {
      opgaver: []
    };
  },
  beforeMount() {
    db.collection("eksempler")
      .doc(this.udfordringen.id)
      .collection("Trin")
      .doc(this.trinet.id)
      .collection("opgaver")
      .orderBy("opgaveNr", "asc")
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
