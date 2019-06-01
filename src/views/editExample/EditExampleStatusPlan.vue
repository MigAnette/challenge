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
      <h2 class="text-xs-center hidden-lg-and-up smallH1 mb-3">Lav Statusplan</h2>
    </div>
    <v-container>
      <form-status></form-status>
    </v-container>

    <!-- Button with Start Udfordring / which both saves(creates) and starts(link to home) challenge -->
    <div class="btnContainer">
      <v-btn
        class="startChalBtn"
        color="teal white--text"
        ripple
        @click="save()"
      >Start Udfordring</v-btn>
    </div>

    <div class="navProtector"></div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import BackArrow from "@/components/navigation/BackArrow";
import FormStatus from "@/components/editCreateChallenge/FormStatus";

export default {
  name: "EditExampleStatusPlan",
  components: {
    BackArrow,
    FormStatus
  },
  data() {
    return {
      udfordring: null,
      trin1: {
        trinNavn: "Find ud af hvad dine udfordringer er",
        trinBegun: true,
        trinDone: false,
        trinNr: 1,
        trinSlug: "find-ud-af-hvad-dine-udfordringer-er"
      },
      trin1Opgave1: {
        opgaveNavn: "Tænk på udfordringer",
        opgBegun: true,
        opgDone: false,
        opgNr: 1
      },
      trin1Opgave2: {
        opgaveNavn: "Skriv udfordringer ned",
        opgBegun: false,
        opgDone: false,
        opgNr: 2
      },
      trin1Opgave3: {
        opgaveNavn: "Skriv personer ned der kunne hjælpe med de udfordringer",
        opgBegun: false,
        opgDone: false,
        opgNr: 3
      },
      trin2: {
        trinNavn: "Overvej hvad det er der gør udfordringen svær",
        trinBegun: false,
        trinDone: false,
        trinNr: 2,
        trinSlug: "overvej-hvad-det-er-der-gør-udfordringen-svær"
      },
      trin2Opgave1: {
        opgaveNavn: "Skriv ned hvad der bekymre dig omkring udfordringerne",
        opgBegun: false,
        opgDone: false,
        opgNr: 1
      },
      trin2Opgave2: {
        opgaveNavn: "Skriv ned hvad du foreventer at få ud af udfordringen",
        opgBegun: false,
        opgDone: false,
        opgNr: 2
      },
      trin2Opgave3: {
        opgaveNavn:
          "Overvej de trin der skulle til for at du kan løse udfordringen",
        opgBegun: false,
        opgDone: false,
        opgNr: 3
      },
      trin3: {
        trinNavn: "Lav udfordringer",
        trinBegun: false,
        trinDone: false,
        trinNr: 3,
        trinSlug: "lav-udfordringer"
      },
      trin3Opgave1: {
        opgaveNavn: "Overvej de opgaver der skal til for at løse trinnet",
        opgBegun: false,
        opgDone: false,
        opgNr: 1
      },
      trin3Opgave2: {
        opgaveNavn: "Tryk på plustegnet",
        opgBegun: false,
        opgDone: false,
        opgNr: 2
      },
      trin3Opgave3: {
        opgaveNavn: "Lav en af de udfordringer du har skrevet ned",
        opgBegun: false,
        opgDone: false,
        opgNr: 3
      }
    };
  },
  methods: {
    // on start udfordring and Gem udfordring
    // both have to compile and create the data in the right way
    save() {
      // saving udfordringer to udfordringer, here it will happen dynamically with what udfodring has been pulled from the url path
      db.collection("users")
        .doc(this.$route.params.user_id)
        .collection("udfordringer")
        .add({
          udfordringNavn: this.udfordring.udfordringNavn,
          udfordringDescrip: this.udfordring.udfordringDescrip,
          udfordringSlug: this.udfordring.udfordringSlug,
          udfordringDone: this.udfordring.udfordringDone,
          udfordringBegun: true
        })
        .then(trin => {
          // calling the createTrin function, where the trin and opgaver is being created, in each there subcollection
          return this.createTrin(trin);
        })
        .then(() => {
          // when the "databas" has been created the router pushes on to Home page
          this.$router.push({
            name: "Home",
            params: { user_id: this.$route.params.user_id }
          });
        });
    },
    createTrin(trin) {
      console.log("Added document with ID: ", trin.id);
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
              opgNr: this.trin1Opgave1.opgNr,
              opgaveNavn: this.trin1Opgave1.opgaveNavn,
              opgDone: this.trin1Opgave1.opgDone,
              opgBegun: this.trin1Opgave1.opgBegun
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
              opgNr: this.trin1Opgave2.opgNr,
              opgaveNavn: this.trin1Opgave2.opgaveNavn,
              opgDone: this.trin1Opgave2.opgDone,
              opgBegun: this.trin1Opgave2.opgBegun
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
              opgNr: this.trin1Opgave3.opgNr,
              opgaveNavn: this.trin1Opgave3.opgaveNavn,
              opgDone: this.trin1Opgave3.opgDone,
              opgBegun: this.trin1Opgave3.opgBegun
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
              opgNr: this.trin2Opgave1.opgNr,
              opgaveNavn: this.trin2Opgave1.opgaveNavn,
              opgDone: this.trin2Opgave1.opgDone,
              opgBegun: this.trin2Opgave1.opgBegun
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
              opgNr: this.trin2Opgave2.opgNr,
              opgaveNavn: this.trin2Opgave2.opgaveNavn,
              opgDone: this.trin2Opgave2.opgDone,
              opgBegun: this.trin2Opgave2.opgBegun
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
              opgNr: this.trin2Opgave3.opgNr,
              opgaveNavn: this.trin2Opgave3.opgaveNavn,
              opgDone: this.trin2Opgave3.opgDone,
              opgBegun: this.trin2Opgave3.opgBegun
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
              opgNr: this.trin3Opgave1.opgNr,
              opgaveNavn: this.trin3Opgave1.opgaveNavn,
              opgDone: this.trin3Opgave1.opgDone,
              opgBegun: this.trin3Opgave1.opgBegun
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
              opgNr: this.trin3Opgave2.opgNr,
              opgaveNavn: this.trin3Opgave2.opgaveNavn,
              opgDone: this.trin3Opgave2.opgDone,
              opgBegun: this.trin3Opgave2.opgBegun
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
              opgNr: this.trin3Opgave3.opgNr,
              opgaveNavn: this.trin3Opgave3.opgaveNavn,
              opgDone: this.trin3Opgave3.opgDone,
              opgBegun: this.trin3Opgave3.opgBegun
            });
        });
    }
  },
  created() {
    let ref = db
      .collection("eksempler")
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
