<template>
    <v-toolbar>
        <v-btn
        color="teal"
        flat
        value="hjem"
        :to="{name: 'Home'}"
      >
        <span>Hjem</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="profil"
        :to="{name: 'Profile'}"
      >
        <span>Profil</span>
        <v-icon>person</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="udfordringer"
        :to="{name: 'Examples'}"
      >
        <span>Udfordringer</span>
        <v-icon>terrain</v-icon>
      </v-btn>
    </v-toolbar>

</template>

<script>
export default {

}
</script>

<style>

</style>
