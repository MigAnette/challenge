<template>
  <div>
    <!-- back arrow to edit forventninger -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <div class="challengeContainer">
      <!-- header with Rediger Udfordrignen -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Udfordringen</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic mt-0"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- text that says Rediger din udfordrings navn og beskrivelse -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 mt-2">Rediger Navn og Beskrivelse:</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Udfordringen</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Rediger Navn og Beskrivelse -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mb-2">Rediger Navn og Beskrivelse:</h2>
    </div>

    <v-layout align-center justify-center row fill-heigh>
      <v-flex xs12 md7>
    <v-form>
      <!-- header with Navn: -->
      <h4 class="mb-2">Navn:</h4>
      <!-- Input field for the name with actual name -->
      <v-text-field v-model="udfordring.udfordringNavn" required label="Navn på udfordring"></v-text-field>
      <!-- header with Beskrivelse: -->
      <h4 class="mb-2">Beskrivelse:</h4>
      <!-- textbox for the description with acutal description-->
      <v-textarea
        outline
        auto-grow
        label="Beskriv din udfordring"
        v-model="udfordring.udfordringDescrip"
      ></v-textarea>

      <div class="btnContainer">
        <v-btn class="startChalBtn" color="teal white--text" ripple @click="edit()">Næste</v-btn>
      </div>
    </v-form>
     </v-flex>
    </v-layout>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import slugify from "slugify";

export default {
  name: "EditNameAndDescrip",
  components: {
    BackArrow
  },
  data() {
    return {
      udfordring: null
    };
  },
  methods: {
    // onclick event on button that updates name and description
    edit() {
      if (this.udfordring.udfordringNavn) {
        // create slug using slugify
        this.udfordring.udfordringSlug = slugify(this.udfordring.udfordringNavn, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection("users")
          .doc(this.$route.params.user_id)
          .collection("udfordringer")
          .doc(this.udfordring.id)
          .update({
              udfordringNavn: this.udfordring.udfordringNavn,
              udfordringDescrip: this.udfordring.udfordringDescrip,
              udfordringSlug: this.udfordring.udfordringSlug
          }).then(() => {
              this.$router.push({name: 'EditTrin1', params: {user_id: this.$route.params.user_id, udfordringen_id: this.$route.params.udfordringen_id}})
          })
      } else {
          this.$router.push({name: 'EditTrin1', params: {user_id: this.$route.params.user_id, udfordringen_id: this.$route.params.udfordringen_id}})
      }
    }
  },
  created() {
    // get on name and description
    let ref = db
      .collection("users")
      .doc(this.$route.params.user_id)
      .collection("udfordringer")
      .where("udfordringSlug", "==", this.$route.params.udfordringen_id);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.udfordring = doc.data();
        this.udfordring.id = doc.id;
      });
    });
  }
};
</script>

<style>
</style>
