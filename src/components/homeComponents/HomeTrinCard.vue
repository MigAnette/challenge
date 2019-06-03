<template>
  <v-layout row wrap align-center justify-center fill-height>
    <v-flex xs12 sm6 md6 lg4>
      <v-card
        elevation="2"
        class="ma-3"
        :to="{name: 'ProfilChallenge', params:{udfordringen_id: udfordring.udfordringSlug}}"
      >
        <!-- text Trin-Name -->
        <v-card-title class="title">Trin {{trin.trinNr}}: </v-card-title>
        <v-card-title class="headline"> {{trin.trinNavn}}</v-card-title>
        
        <!-- Opgaver: -->
        <home-opg-card class="pb-1" :trin="trin" :udfordring="udfordring"></home-opg-card>

        
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import db from "@/firebase/init";
import HomeOpgCard from '@/components/homeComponents/HomeOpgCard';

export default {
  name: "HomeTrinCard",
  props: ["udfordring"],
  components: {
      HomeOpgCard
  },
  data() {
    return {
      trin: null
    };
  },
  beforeMount() {
    db.collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .doc(this.udfordring.id)
      .collection("Trin")
      .where("trinBegun", "==", true)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.trin = doc.data();
          this.trin.id = doc.id;
        });
      });
  }
};
</script>

<style>
</style>
