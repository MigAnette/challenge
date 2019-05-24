<template>
  <div>
    <!-- modal that opens when the gear icon is clicked -->
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on }">
        <v-btn flat icon large v-on="on">
          <v-icon large color="grey darken-1">settings</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Rediger Email</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-title>Rediger Kodeord</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-title>Rediger Navn</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <a @click="logout"><v-list-tile>
           <v-list-tile-title> Log af</v-list-tile-title>
        </v-list-tile></a>
      </v-list>
    </v-menu>
    <!-- THEY ARE ALL BUTTONS -->

    <!-- Update Email router link -->
    <!-- Update Password router link -->
    <!-- Update Name router link -->

    <!-- change theme to dark or light -->

    <!-- log off goes to a modal that ensures the decision-->
  </div>
</template>

<script>
import firebase from 'firebase/app' 
require('firebase/auth')

export default {
  name: "SettingProfile",
  data() {
    return {};
  },
  methods: {
    // dynamic change of the background
    
    // signOff with authentication
    logout() {  
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'FrontPage'})
            })
        }

  }
};
</script>

<style>
</style>
