<template>
  <div>
    <!-- back arrow going back to frontpage if not signed up -->
    <v-toolbar flat color="transparent">
    </v-toolbar>
    <!-- Header with Udfordringer -->
    <!-- H1 for desktop: -->
    <h1 class="text-xs-center hidden-md-and-down desktopH1">Udfordringer</h1>
    <!-- H1 for everything else: -->
    <h1 class="text-xs-center hidden-lg-and-up">Udfordringer</h1>
    <!-- box with challenge v-for have link to the specific challenge-->
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="udfordring in udfordringer" :key="udfordring.id">
        <v-card
          elevation="2"
          class="ma-3"
          :to="{name: 'ExampleChallenge', params:{udfordringen_id: udfordring.udfordringSlug}}"
        >
          <!-- text Udfordring-Name -->
          <v-card-title class="headline">{{ udfordring.udfordringNavn}}</v-card-title>
          <!-- Trin: -->
          <example-card-text :udfordringen="udfordring"></example-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import db from "@/firebase/init";
import ExampleCardText from "@/components/exampleComponents/ExampleCardText";

export default {
  name: "LoggedInExamples",
  components: {
    ExampleCardText
  },
  data() {
    return {
      udfordringer: []
    };
  },
  created() {
    // get udfordring with trin from eksempler
    db.collection("eksempler")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let udfordring = doc.data();
          udfordring.id = doc.id;
          this.udfordringer.push(udfordring);
        });
      });
  }
};
</script>

<style>
.desktopH1 {
  margin-top: 10vh;
}
</style>
