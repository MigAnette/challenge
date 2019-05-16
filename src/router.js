import Vue from 'vue';
import Router from 'vue-router';
// Main navigation links:
import Home from '@/views/mainNavLinks/home/Home';
import Profile from '@/views/mainNavLinks/profile/Profile';
import Examples from '@/views/mainNavLinks/exampleChal/Examples';
// Frontpage new user:
import FrontPage from '@/views/frontPage/FrontPage';
import SignUp from '@/views/user/signUp/SignUp';
// Login
import Login from '@/views/user/login/Login';
// editExample
import AddForventninger from '@/views/editExample/AddForventninger';
import EditExampleNameAndDescrip from '@/views/editExample/EditExampleNameAndDescrip';
import EditExampleStatusPlan from '@/views/editExample/EditExampleStatusPlan';
import EditExampleTrin from '@/views/editExample/EditExampleTrin';
// Status:
import StatusOpg from '@/views/status/StatusOpg';
import StatusReflect from '@/views/status/StatusReflect';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
// Main navigation links: 
    {
      // Home
      path: '/hjem/:challenge',
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

// Frontpage new user:
    {
      // Frontpage
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      // SignUp
      path: '/:main/tilmeld',
      name: 'SignUp',
      component: SignUp
    },

// Login
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

// editExample
    {
      // AddForventninger
      path:'/redigerEksempel/forventninger',
      name: 'AddForventninger',
      component: AddForventninger
    },
    {
      // EditExampleNameAndDescrip
      path:'/redigerEksempel/navn&beskrivelse',
      name: 'EditExampleNameAndDescrip',
      component: EditExampleNameAndDescrip
    },
    {
      // EditExampleStatusPlan
      path: '/redigerEksempel/statusPlan',
      name: 'EditExampleStatusPlan',
      component: EditExampleStatusPlan
    },
    {
      // EditExampleTrin
      path: 'redigerEksempel/trin/:trin_id',
      name: 'EditExampleTrin',
      component: EditExampleTrin
    },

// Status
    {
      // StatusOpg
      path: '/hjem/:challenge/status/:trin/:opgave',
      name: 'StatusOpg',
      component: StatusOpg
    },
    {
      // StatusReflect
      path: '/hjem/:challenge/status/:trin/:opgave/reflektion',
      name: 'StatusReflect',
      component: StatusReflect
    }

  ]
})
