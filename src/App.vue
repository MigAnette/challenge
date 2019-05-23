<template>
  <v-app>
    <v-container>
      <top-nav-bar v-if="notFrontAndLogin"></top-nav-bar>

      <router-view/>

      <bottom-nav-bar v-if="notFrontAndLogin"></bottom-nav-bar>
    </v-container>
  </v-app>
</template>

<script>
import BottomNavBar from "@/components/navigation/BottomNavBar";
import TopNavBar from "@/components/navigation/TopNavBar";



export default {
  name: "App",
  components: {
    BottomNavBar,
    TopNavBar
  },
  data() {
    return {
      notFrontAndLogin: false,
      userLogin: false
    };
  },
  methods: {
  
  },
  watch: {
    '$route' (to, from ) {
      if (to.params.user_id) {
        this.notFrontAndLogin = true;
      } 
    }
  }
};
</script>
