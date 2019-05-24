<template>
  <v-form>
    <v-flex mt-5>
      <h2>Trin {{this.trinet.trinNr}}:</h2>
      <v-text-field :label='"Navn på trin " + this.trinet.trinNr' v-model="this.trinet.trinNavn "></v-text-field>
    </v-flex>

    <form-trin-opg v-model="trin" :trinet="trinet" :udfordring="udfordring" @submit="onSubmit" :nextPath="nextPath"></form-trin-opg>

  </v-form>
</template>

<script>
import db from "@/firebase/init";
import FormTrinOpg from "@/components/editCreateChallenge/FormTrinOpg";

export default {
  name: "FormTrin",
  props: ["udfordring", "formTrinNr", "nextPath"],
  components: {
    FormTrinOpg
  },
  data() {
    return {
      trinet: null,
      trin: {
        opgave1: {
          opgaveNavn: null,
          person: null,
        },
        opgave2: {
          opgaveNavn: null,
          person: null
        },
        opgave3: {
          opgaveNavn: null,
          person: null
        }
      } 
      
    };
  },
  methods: {
    onSubmit(payload) {
      this.$emit('submit', payload);
    }
  },
  created() {
    db.collection("eksempler")
      .doc(this.udfordring.id)
      .collection("Trin")
      .where("trinNr", "==", this.formTrinNr)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.trinet = doc.data();
          this.trinet.id = doc.id;
        });
      });   
  },
  
};
</script>

<style>
</style>
