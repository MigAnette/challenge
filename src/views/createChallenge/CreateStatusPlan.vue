<template>
  <div>
    <!-- back arrow to the page create Trin -->
    <back-arrow class="hidden-lg-only"></back-arrow>
    <back-arrow class="hidden-md-and-down mt-5"></back-arrow>
    <div class="challengeContainer">
      <!-- Header with Udfordringen name dynamic -->
      <!-- H1 for desktop: -->
      <h1 class="text-xs-center hidden-md-and-down desktopH1">Lav Udfordring</h1>

      <!-- header with Lav Statusplan -->
      <h2 class="text-xs-center hidden-md-and-down desktopH1 teal--text mt-0">Lav Statusplan</h2>

      <!-- H1 for everything else: -->
      <h1 class="hidden-lg-and-up smallH1">Lav Udfordring</h1>

      <!-- header with Lav Statusplan -->
      <h2 class="text-xs-center hidden-lg-and-up smallH1 teal--text mb-2">Lav Statusplan</h2>
    </div>
    <v-container>
      <form-status></form-status>
    </v-container>

    <!-- Button with Start Udfordring / which both saves(creates) and starts(link to home) challenge -->
    <!-- Button with Gem Udfordring / which saves(creates) and links to profile -->
    <div class="btnContainer">
      <v-btn
        class="startChalBtn"
        color="teal white--text"
        ripple
        disabled
        :to="{name: 'Home', params: {user_id: this.$route.params.user_id}}"
      >Start Udfordring</v-btn>
    </div>
    <div class="btnContainer">
      <v-btn
        class="startChalBtn"
        color="teal white--text"
        ripple
        @click="save()"
      >Gem Udfordring</v-btn>
    </div>

    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormStatus from "@/components/editCreateChallenge/FormStatus";

export default {
  name: "CreateStatusPlan",
  components: {
    BackArrow,
    FormStatus
  },
  data() {
    return {
      udfordringen: {
        udfordringNavn: "Lav en udfordring",
        udfordringSlug: "lav-en-udfordring",
        udfordringDone: false,
        udfordringBegun: false,
        udfordringDescrip: "Lav en udfordring der passer dine behov"
      },
      trin1: {
        trinNavn: "Lav trin 1",
        trinBegun: false,
        trinDone: false,
        trinNr: 1,
        trinSlug: "lav-trin-1"
      },
      opgave1: {
        opgaveNavn: "Lav opgave 1",
        opgBegun: false,
        opgDone: false,
        opgNr: 1
      },
      opgave2: {
        opgaveNavn: "Lav opgave 2",
        opgBegun: false,
        opgDone: false,
        opgNr: 2
      },
      opgave3: {
        opgaveNavn: "Lav opgave 3",
        opgBegun: false,
        opgDone: false,
        opgNr: 3
      },
      trin2: {
        trinNavn: "Lav trin 2",
        trinBegun: false,
        trinDone: false,
        trinNr: 2,
        trinSlug: "lav-trin-2"
      },
      trin3: {
        trinNavn: "Lav trin 3",
        trinBegun: false,
        trinDone: false,
        trinNr: 3,
        trinSlug: "lav-trin-3"
      }
    };
  },
  methods: {
    // on start udfordring and Gem udfordring
    // both have to compile and create the data in the right order
    save() {
      // saving udfordringer to udfordringer
      db.collection("users")
        .doc(this.$route.params.user_id)
        .collection("udfordringer")
        .add({
          udfordringNavn: this.udfordringen.udfordringNavn,
          udfordringDescrip: this.udfordringen.udfordringDescrip,
          udfordringSlug: this.udfordringen.udfordringSlug,
          udfordringDone: this.udfordringen.udfordringDone,
          udfordringBegun: this.udfordringen.udfordringBegun
        })
        .then(trin => {
          // calling the createTrin function, where the trin and opgaver is being created, in each there subcollection
          return this.createTrin(trin);
        }).then(() => {
          // when the "databas" has been created the router pushes on to Profile page
          this.$router.push({name: 'Profile', params: {user_id: this.$route.params.user_id}})
        });
    },
    createTrin(trin) {
      // here trin 1 is being made in the sub-collection Trin
      // Trin 1
      db.collection("users")
        .doc(this.$route.params.user_id)
        .collection("udfordringer")
        .doc(trin.id)
        .collection("Trin")
        .add({
          trinNavn: this.trin1.trinNavn,
          trinSlug: this.trin1.trinSlug,
          trinBegun: this.trin1.trinBegun,
          trinNr: this.trin1.trinNr,
          trinDone: this.trin1.trinDone
        })
        .then(opg => {
          // when the Trin 1 document has been made, opgaver subkollektion is made where in each opgaver has its own document
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 1 opgave 1
              opgNr: this.opgave1.opgNr,
              opgaveNavn: this.opgave1.opgaveNavn,
              opgDone: this.opgave1.opgDone,
              opgBegun: false
            });
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 1 opgave 2
              opgNr: this.opgave2.opgNr,
              opgaveNavn: this.opgave2.opgaveNavn,
              opgDone: this.opgave2.opgDone,
              opgBegun: this.opgave2.opgBegun
            });
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 1 opgave 3
              opgNr: this.opgave3.opgNr,
              opgaveNavn: this.opgave3.opgaveNavn,
              opgDone: this.opgave3.opgDone,
              opgBegun: this.opgave3.opgBegun
            });
        });

      // Trin 2
      db.collection("users")
        .doc(this.$route.params.user_id)
        .collection("udfordringer")
        .doc(trin.id)
        .collection("Trin")
        .add({
          trinNavn: this.trin2.trinNavn,
          trinSlug: this.trin2.trinSlug,
          trinBegun: this.trin2.trinBegun,
          trinNr: this.trin2.trinNr,
          trinDone: this.trin2.trinDone
        })
        .then(opg => {
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 2 opgave 1
              opgNr: this.opgave1.opgNr,
              opgaveNavn: this.opgave1.opgaveNavn,
              opgDone: this.opgave1.opgDone,
              opgBegun: this.opgave1.opgBegun
            });
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 2 opgave 2
              opgNr: this.opgave2.opgNr,
              opgaveNavn: this.opgave2.opgaveNavn,
              opgDone: this.opgave2.opgDone,
              opgBegun: this.opgave2.opgBegun
            });
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 2 opgave 3
              opgNr: this.opgave3.opgNr,
              opgaveNavn: this.opgave3.opgaveNavn,
              opgDone: this.opgave3.opgDone,
              opgBegun: this.opgave3.opgBegun
            });
        });

      // Trin 3
      db.collection("users")
        .doc(this.$route.params.user_id)
        .collection("udfordringer")
        .doc(trin.id)
        .collection("Trin")
        .add({
          trinNavn: this.trin3.trinNavn,
          trinSlug: this.trin3.trinSlug,
          trinBegun: this.trin3.trinBegun,
          trinNr: this.trin3.trinNr,
          trinDone: this.trin3.trinDone
        })
        .then(opg => {
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 3 opgave 1
              opgNr: this.opgave1.opgNr,
              opgaveNavn: this.opgave1.opgaveNavn,
              opgDone: this.opgave1.opgDone,
              opgBegun: this.opgave1.opgBegun
            });
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 3 opgave 2
              opgNr: this.opgave2.opgNr,
              opgaveNavn: this.opgave2.opgaveNavn,
              opgDone: this.opgave2.opgDone,
              opgBegun: this.opgave2.opgBegun
            });
          db.collection("users")
            .doc(this.$route.params.user_id)
            .collection("udfordringer")
            .doc(trin.id)
            .collection("Trin")
            .doc(opg.id)
            .collection("opgaver")
            .add({
              // trin 3 opgave 3
              opgNr: this.opgave3.opgNr,
              opgaveNavn: this.opgave3.opgaveNavn,
              opgDone: this.opgave3.opgDone,
              opgBegun: this.opgave3.opgBegun
            });
        });
    }
  }
};
</script>

<style>
</style>
