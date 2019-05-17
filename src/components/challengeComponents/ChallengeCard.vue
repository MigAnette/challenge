<template>
  <v-layout row wrap>
    <v-flex xs12 md4 lg1 v-for="trinet in trin" :key="trinet">
      <v-card>
        <v-card-title>Trin {{trinet.trinNr}}:</v-card-title>
        <challenge-card-opg :trinet="trinet" :udfordringen="udfordringen"></challenge-card-opg>
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
