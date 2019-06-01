<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
    <template v-slot:activator="{ on }">
      <v-btn flat icon large v-on="on">
        <v-icon large color="grey darken-1">settings</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile :to="{name: 'EditForventninger', params: {user_id: this.$route.params.user_id, udfordringen_id: this.$route.params.udfordringen_id}}">
        <v-list-tile-title>Rediger Udfordring</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-title>Slet Udfordring</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
  <!-- button to go to editing challenge pages -->
  <!-- button that deletes challenge -->
</template>

<script>
export default {
  name: "SettingChallenge",
  data() {
    return {
      menu: false,
      
    };
  }
};
</script>

<style>
</style>
