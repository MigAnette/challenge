<template>
  <v-form>
    <v-layout wrap row>
      <v-flex xs12 mt-3 v-for="opgave in opgaver" :key="opgave">
        <h4 class="teal--text mb-2">Opgave {{opgave.opgNr}}</h4>
        <v-textarea
          auto-grow
          required
          rows="1"
          outline
          :label='"Navn på opgave " + opgave.opgNr'
          v-model="opgave.opgaveNavn"
        ></v-textarea>
        <h5>Vælg en person der kan hjælpe med opgaven:</h5>
        <v-select label="Person" class="mb-2" :items="personer" v-model="select.person_id[opgave.opgNr]"></v-select>
      </v-flex>
    </v-layout>
    <div class="btnContainer">
      <v-btn class="startChalBtn" color="teal white--text" ripple @click="edit">Næste</v-btn>
    </div>
  </v-form>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "EditFormTrinOpg",
  props: ["trinet", "udfordring", "nextPath"],
  data() {
    return {
      opgaver: [],
      personer: ["Brian", "Hanne", "Emma", "Bjarne", "Oliver"],
      opgaveNavn: [],
      select: {
        person_id: ["undefined", "", "Hanne", "Brian"]
      },
      opgave: []
    };
  },
  methods: {
    edit() {
      if (this.trinet.trinNavn) {
        // create slug using slugify
        this.trinet.trinSlug = slugify(this.trinet.trinNavn, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });

        db.collection("users")
          .doc(this.$route.params.user_id)
          .collection("udfordringer")
          .doc(this.udfordring.id)
          .collection("Trin")
          .doc(this.trinet.id)
          .update({
            trinNavn: this.trinet.trinNavn,
            trinSlug: this.trinet.trinSlug
          })
          .then(() => {
            this.$router.push({
              name: this.nextPath.pathName,
              params: {
                udfordringen_id: this.nextPath.paramsUdfordring,
                user_id: this.nextPath.paramsUser
              }
            });
          });
      } else {
        this.$router.push({
          name: this.nextPath.pathName,
          params: {
            udfordringen_id: this.nextPath.paramsUdfordring,
            user_id: this.nextPath.paramsUser
          }
        });
      }
    }
  },
  created() {
    db.collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .doc(this.udfordring.id)
      .collection("Trin")
      .doc(this.trinet.id)
      .collection("opgaver")
      .orderBy("opgNr", "asc")
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
