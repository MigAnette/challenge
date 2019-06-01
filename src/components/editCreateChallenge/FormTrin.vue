<template>
  <v-form>
    <v-flex mt-5>
      <h2>Trin {{this.trinet.trinNr}}:</h2>
      <v-textarea rows="2" :label='"Navn på trin " + this.trinet.trinNr' v-model="this.trinet.trinNavn "></v-textarea>
    </v-flex>

    <form-trin-opg v-model="trin" :trinet="trinet" :udfordring="udfordring" @submit="onSubmit"></form-trin-opg>

<div class="btnContainer">
  <v-btn class="startChalBtn" color="teal white--text" ripple @click="submit">Næste</v-btn>
</div>
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
    submit() {
      this.$router.push({
        name: this.nextPath.pathName,
        params: {
          udfordringen_id: this.nextPath.paramsUdfordring,
          user_id: this.nextPath.paramsUser
        }
      });
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
  }
  
};
</script>

<style>
</style>
