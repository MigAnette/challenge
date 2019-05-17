<template>
  <v-layout>
    <v-flex v-for="trinet in trin" :key="trinet.id">
      <v-card>
        <v-card-title>{{trin.trinNavn}}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "ChallengeCard",
  props: ["udfordringen"],
  data() {
    return {
      trin: []
    };
  },
  beforeMount() {
    db.collection("eksempler")
      .doc(this.udfordringen.id)
      .collection("Trin")
      .orderBy("trinNr", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let trinet = doc.data();
          trinet.id = doc.id;
          this.trin.push(trinet);
        });
      });
  }
};
</script>

<style>
</style>
