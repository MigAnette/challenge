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
      notFrontAndLogin: true,
      userLogin: false
    };
  },
  methods: {
    // navNotOnPages() {
    //   if (this.$route.path == "/" || this.$route.path == "/login") {
    //     this.notFrontAndLogin = false;
    //   }
    // }
  },
  created() {
    this.navNotOnPages();
  }
};
</script>
