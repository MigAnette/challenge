import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import Profile from '@/views/profile/Profile';
import Examples from '@/views/exampleChal/Examples';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // Home
      path: '/hjem',
      name: 'Home',
      component: Home
    },
    {
      // Profile
      path: '/profil/:user',
      // has to go to user profile page
      name: 'Profile',
      component: Profile
    },
    {
      // Examples
      path: '/eksempler',
      name: 'Examples',
      component: Examples
    },

  ]
})
