<template>
<v-layout align-center justify-center row fill-heigh>
      <v-flex xs12 md7>
  <v-form>
    <v-flex mt-5>
      <h2>Trin {{this.trinet.trinNr}}:</h2>
      <v-textarea
        rows="2"
        :label='"Navn på trin " + this.trinet.trinNr'
        v-model="trinet.trinNavn "
      ></v-textarea>
    </v-flex>

    <edit-form-trin-opg :trinet="trinet" :nextPath="nextPath" :udfordring="udfordring"></edit-form-trin-opg>

    
  </v-form>
  </v-flex>
    </v-layout>
</template>

<script>
import db from "@/firebase/init";
import EditFormTrinOpg from "@/components/editChallenge/EditFormTrinOpg";

export default {
  name: "EditFormTrin",
  props: ["udfordring", "editFormTrinNr", "nextPath"],
  components: {
    EditFormTrinOpg
  },
  data() {
    return {
      trinet: null,
    };
  },
  methods: {
  },
  created() {
    db.collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .doc(this.udfordring.id)
      .collection("Trin")
      .where("trinNr", "==", this.editFormTrinNr)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.trinet = doc.data();
          this.trinet.id = doc.id;
        });
      });
  }
};
</script>

<style>
</style>
