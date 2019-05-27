<template>
  <v-layout row wrap>
    <v-flex xs12 md4 lg4 v-for="trinet in trin" :key="trinet">
      <v-card class="py-3 ma-3">
        <v-card-title class="title pb-0 pt-1">Trin {{trinet.trinNr}}: <span v-if="trinet.trinDone"><v-icon right color="green">check</v-icon></span></v-card-title>
        <profil-challenge-card-opg :trinene="trinet" :udfordring="udfordringen"></profil-challenge-card-opg>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import db from "@/firebase/init";
import ProfilChallengeCardOpg from "@/components/challengeComponents/ProfilChallengeCardOpg";

export default {
  name: "ChallengeCard",
  props: ["udfordringen"],
  components: {
    ProfilChallengeCardOpg
  },
  data() {
    return {
      trin: []
    };
  },
  beforeMount() {
    db.collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
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
