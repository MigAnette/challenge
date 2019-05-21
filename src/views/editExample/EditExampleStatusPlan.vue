<template>
  <div>
    <!-- back arrow to the page edit example Trin -->
    <back-arrow></back-arrow>
    <!-- header with Lav Statusplan -->
    <div class="challengeContainer">
    <!-- header with Rediger Eksemplet -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Rediger Eksemplet</h1>
      <h1
        class="text-xs-center hidden-md-and-down desktopH1 teal--text font-italic"
      >{{this.udfordring.udfordringNavn}}</h1>
      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1">Lav Statusplan</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Rediger Eksemplet</h1>
      <h1 class="hidden-lg-and-up smallH1 teal--text font-italic">{{this.udfordring.udfordringNavn}}</h1>

      <!-- header with Tilføj Forventninger -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1">Lav Statusplan</h2>
    </div>

    <!-- text with Hvor mange dag skal der gå mellem notifikation? -->
    <!-- 3 radiobuttons with 1 3 and 7 underneath -->

    <!-- text with Hvornår vil du gerne påmindes? -->
    <!-- header with Klokkeslæt -->
    <!-- Time picker with button to set alarm -->

    <!-- Button with Start Udfordring / which both saves(creates) and starts(link to home) challenge -->
    <!-- Button with Gem Udfordring / which saves(creates) and links to profile -->
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
export default {
  name: "EditExampleStatusPlan",
  components: {
    BackArrow
  },
  data() {
    return {
        udfordring: null,
    };
  },
  methods: {
    // on start udfordring and Gem udfordring
    // both have to compile and create the data in the right way
  },
  created() {
      let ref = db
      .collection("eksempler")
      .where("udfordringSlug", "==", this.$route.params.udfordringen_id);

    ref
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.udfordring = doc.data();
          this.udfordring.id = doc.id;
        });
      })
  }
};
</script>

<style>
</style>
