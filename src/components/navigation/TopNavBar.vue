<template>
  <v-toolbar class="hidden-md-and-down">
    <v-spacer></v-spacer>
    <v-toolbar-items class="topNav">
      <v-btn color="teal" flat value="hjem" :to="{name: 'Home'}">
        <v-icon>home</v-icon>
        <span>Hjem</span>
      </v-btn>

      <v-btn color="teal" flat value="profil" :to="{name: 'Profile'}">
        <v-icon>person</v-icon>
        <span>Profil</span>
      </v-btn>

      <v-btn color="teal" flat value="udfordringer" :to="{name: 'Examples'}">
        <v-icon>terrain</v-icon>
        <span>Udfordringer</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>

</style>
