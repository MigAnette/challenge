import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase/app' 
require('firebase/auth')
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
// Create Challenge
import CreateForventninger from '@/views/createChallenge/CreateForventninger';
import CreateNameAndDescrip from '@/views/createChallenge/CreateNameAndDescrip';
import CreateStatusPlan from '@/views/createChallenge/CreateStatusPlan';
import CreateTrin from '@/views/createChallenge/CreateTrin';
// the Challenge
import Challenge from '@/views/theChallenge/Challenge';
import Forventninger from '@/views/theChallenge/Forventninger';
import TrinOpg from '@/views/theChallenge/TrinOpg';
import StatusOverview from '@/views/theChallenge/status/StatusOverview';
import StatusSingleOpg from '@/views/theChallenge/status/StatusSingleOpg';
// edit Challenge
import EditForventninger from '@/views/editChallenge/EditForventninger';
import EditNameAndDescrip from '@/views/editChallenge/EditNameAndDescrip';
import EditTrin from '@/views/editChallenge/EditTrin';
import EditStatusPlan from '@/views/editChallenge/EditStatusPlan';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
// Main navigation links: 
    {
      // Home
      path: '/hjem',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Profile
      path: '/profil',
      // has to go to user profile page
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
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
      path: '/tilmeld',
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
      path:'/:udfordringen_id/redigerEksempel/forventninger',
      name: 'AddForventninger',
      component: AddForventninger,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // EditExampleNameAndDescrip
      path:'/:udfordringen_id/redigerEksempel/navn&beskrivelse',
      name: 'EditExampleNameAndDescrip',
      component: EditExampleNameAndDescrip,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // EditExampleStatusPlan
      path: '/:udfordringen_id/redigerEksempel/statusPlan',
      name: 'EditExampleStatusPlan',
      component: EditExampleStatusPlan,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // EditExampleTrin
      path: '/:udfordringen_id/redigerEksempel/trin/:trin_id',
      name: 'EditExampleTrin',
      component: EditExampleTrin,
      // meta: {
      //   requiresAuth: true
      // }
    },

// Status
    {
      // StatusOpg
      path: '/hjem/:challenge/status/:trin/:opgave',
      name: 'StatusOpg',
      component: StatusOpg,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // StatusReflect
      path: '/hjem/:challenge/status/:trin/:opgave/reflektion',
      name: 'StatusReflect',
      component: StatusReflect,
      // meta: {
      //   requiresAuth: true
      // }
    },

// Create Challenge
    {
      // Create Forventninger
      path: '/lavUdfordring/forventninger',
      name: 'CreateForventninger',
      component: CreateForventninger,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Create Name and Description
      path: '/lavUdfordring/navn&beskrivelse',
      name: 'CreateNameAndDescription',
      component: CreateNameAndDescrip,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Create Statusplan
      path: '/lavUdfordring/statusPlan',
      name: 'CreateStatusPlan',
      component: CreateStatusPlan,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Create Trin
      path: '/lavUdfordring/trin/:trin_id',
      name: 'CreateTrin',
      component: CreateTrin,
      // meta: {
      //   requiresAuth: true
      // }
    },

// the Challenge
    {
      // Challenge
      path: '/:main_id/udfordringen/:udfordringen_id',
      name: 'Challenge',
      component: Challenge,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Forventninger
      path: '/:main/udfordringen/:udfordringen_id/forventninger',
      name: 'Forventninger',
      component: Forventninger,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // TrinOpg
      path: '/:main/udfordringen/:udfordringen_id/:trin_id',
      name: 'TrinOpg',
      component: TrinOpg,
      // meta: {
      //   requiresAuth: true
      // }
    },
    // Status oversigt og opgaver
    {
      // Status Oversigt
      path: '/:main/udfordringen/:udfordringen_id/:trin_id/statusOversigt',
      name: 'StatusOverview',
      component: StatusOverview,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Status Single Opg
      path: '/:main/udfordrignen/:udfordringen_id/:trin_id/status/:opgave_id/:status_id',
      name: 'StatusSingleOpg',
      component: StatusSingleOpg,
      // meta: {
      //   requiresAuth: true
      // }
    },

// Edit Challenge
    {
      // Edit Forventninger
      path: '/:main/udfordringen/:udfordringen_id/redigerUdfordring/forventninger',
      name: 'EditForventninger',
      component: EditForventninger,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Edit Name And Desc
      path: '/:main/udfordringen/:udfordringen_id/redigerUdfordring/navn&beskrivelse',
      name: 'EditNameAndDescrip',
      component: EditNameAndDescrip,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Edit Trin
      path: '/:main/udfordringen/:udfordringen_id/redigerUdfordring/trin/:trin_id',
      name: 'EditTrin',
      component: EditTrin,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      // Edit StatusPlan
      path: '/:main/udfordringen/:udfordringen_id/redigerUdfordring/statusplan',
      name: 'EditStatusPlan',
      component: EditStatusPlan,
      // meta: {
      //   requiresAuth: true
      // }

    }

  ]
});

// Comes from geo-ninjas router:
router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user) {
      //user signed in, proceed to route
      next()
    } else {
      //no user signed up, redirect to signUp
      next({name: 'Login'});
    }
  }else {
    next()
  }
});

export default router

