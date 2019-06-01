<template>
  <div>
    <!-- back arrow to edit forventninger -->
    <back-arrow></back-arrow>
    <div class="challengeContainer">
      <!-- header with Rediger Udfordrignen -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Udfordringen</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- text that says Rediger Statusplan -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Rediger Statusplan</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Udfordringen</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Rediger Statusplan -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mb-3">Rediger Statusplan</h2>
    </div>

    <v-form mt-5>
    <!-- text with Hvor mange dag skal der gå mellem notifikation? -->
    <h4>Vælg hvor mange dage der skal gå mellem status notifikationer:</h4>
    <!-- 3 radiobuttons with 1 3 and 7 underneath -->
    <v-layout>
      <v-flex xs12>
        <v-radio-group required row v-model="day">
          <v-radio value="radio-1" label="1"></v-radio>
          <v-radio value="radio-2" label="3"></v-radio>
          <v-radio value="radio-3" label="7"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <!-- text with Hvornår vil du gerne påmindes? -->
    <h4>Hvornår vil du gerne påmindes?</h4>
    <!-- header with Klokkeslæt -->
    <!-- Time picker with button to set alarm -->
    <v-time-picker width="250" color="teal" format="24hr" v-model="picker"></v-time-picker>
  </v-form>

    <!-- Button with Gem Udfordring / which saves(update) and links to profile -->
    <div class="btnContainer">
      <v-btn
        class="startChalBtn"
        color="teal white--text"
        ripple
        :to="{name:'Profile', params: {user_id: this.$route.params.user_id}}"
      >Rediger Udfordring</v-btn>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
export default {
  name: "EditStatusPlan",
  components: {
    BackArrow
  },
  data() {
    return {
        udfordring: null,
        day: "radio-2",
        picker: "14:30"
    };
  },
  methods: {
    // on start udfordring and Gem udfordring
    // both have to compile and update the data in the right way
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
