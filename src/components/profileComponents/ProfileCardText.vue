<template>
  <div>
    <div v-for="trinet in trin" :key="trinet.id">
      <v-card-title class="subheading pb-0 pt-1">Trin {{trinet.trinNr}}:</v-card-title>
      <v-card-text class="body-2 pt-0">{{trinet.trinNavn}}</v-card-text>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "ExampleCardText",
  props: ["udfordringen"],
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
