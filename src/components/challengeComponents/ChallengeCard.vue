<template>
  <v-layout row wrap align-center justify-center fill-heigh>
    <v-flex xs12 md7 v-for="trinet in trin" :key="trinet">
      <v-card class="py-3 ma-3">
        <v-card-title class="title pb-0 pt-1">Trin {{trinet.trinNr}}:</v-card-title>
        <challenge-card-opg :trinene="trinet" :udfordring="udfordringen"></challenge-card-opg>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import db from "@/firebase/init";
import ChallengeCardOpg from "@/components/challengeComponents/ChallengeCardOpg";

export default {
  name: "ChallengeCard",
  props: ["udfordringen"],
  components: {
    ChallengeCardOpg
  },
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
