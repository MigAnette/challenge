<template>
  <v-app>
    <router-view/>

      <bottom-nav-bar></bottom-nav-bar>
  </v-app>
</template>

<script>
import BottomNavBar from '@/components/navigation/BottomNavBar';
import TopNavBar from '@/components/navigation/TopNavBar';

export default {
  name: 'App',
  components: {
    BottomNavBar,
    TopNavBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
