<template>
  <div>
    <!-- Login link going to login page -->
    <v-toolbar flat color="transparent">
      <v-spacer></v-spacer>
      <v-btn flat :to="{name: 'Login'}">
        <span>Login</span>
      </v-btn>
    </v-toolbar>

    <!-- slider with different messages about the app -->
    <!-- the slider needs next and previos arrows -->

    <v-carousel light>
      <v-carousel-item interval="6000" touch flat v-for="frontText in frontTexts" :key="frontText">
        <h2>{{frontText.text}}</h2>
      </v-carousel-item>
    </v-carousel>

    <!-- Link with Se Udfordringerne her that goes to the examples -->
    <div class="btnFrontContainer">
      <v-btn class="btnFront" flat :to="{name: 'Examples'}">
        <span class="subheading exampleBtn">Se Eksempler på udfordringer Her</span>
      </v-btn>
    </div>
    <!-- dots that show which of the slides you are at -->
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  data() {
    return {
      frontTexts: [
        { text: "Hjælper dig med at nå de mål du gerne vil opnå" },
        {
          text:
            "Gennem udfordringer, trin og opgaver hjælper appen dig med en plan til at opnå dine mål"
        },
        { text: "Start din udfordring i dag ved at trykke på linket herunder" }
      ]
    };
  },
  methods: {
    // a function for previous button on the slider
    previous() {
      const first = this.frontTexts.shift();
      this.frontTexts = this.frontTexts.concat(first);
    },
    // a function for next button on the slider
    next() {
      const last = this.frontTexts.pop();
      this.frontTexts = [last].concat(this.frontTexts);
    }
  }
};
</script>

<style>
.v-carousel {
  box-shadow: none;
}

.v-carousel__controls {
  background-color: transparent;
}

.v-responsive__content {
  align-self: center;
  display: grid;
}

.v-responsive__content h2 {
  width: 50vw;
  justify-self: center;
}

.btnFrontContainer {
    display: grid;
    height: 27vh;
}

.exampleBtn {
  text-decoration: underline;
}

.btnFront {
    justify-self: center;
    align-self: center;
}
</style>
