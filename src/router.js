import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase/app' 
require('firebase/auth')
// Main navigation links:
import Home from '@/views/mainNavLinks/home/Home';
import Profile from '@/views/mainNavLinks/profile/Profile';
import SignUpExamples from '@/views/mainNavLinks/exampleChal/SignUpExamples';
import SignUpChallenge from '@/views/mainNavLinks/exampleChal/SignUpChallenge';
import LoggedInExamples from '@/views/mainNavLinks/exampleChal/LoggedInExamples';
// Frontpage new user:
import FrontPage from '@/views/frontPage/FrontPage';
import SignUp from '@/views/user/signUp/SignUp';
// Login
import Login from '@/views/user/login/Login';
// editExample
import AddForventninger from '@/views/editExample/AddForventninger';
import EditExampleNameAndDescrip from '@/views/editExample/EditExampleNameAndDescrip';
import EditExampleStatusPlan from '@/views/editExample/EditExampleStatusPlan';
import EditExampleTrin1 from '@/views/editExample/EditExampleTrin1';
import EditExampleTrin2 from '@/views/editExample/EditExampleTrin2';
import EditExampleTrin3 from '@/views/editExample/EditExampleTrin3';
// Status:
import StatusOpg from '@/views/status/StatusOpg';
import StatusReflect from '@/views/status/StatusReflect';
// Create Challenge
import CreateForventninger from '@/views/createChallenge/CreateForventninger';
import CreateNameAndDescrip from '@/views/createChallenge/CreateNameAndDescrip';
import CreateStatusPlan from '@/views/createChallenge/CreateStatusPlan';
import CreateTrin1 from '@/views/createChallenge/CreateTrin1';
import CreateTrin2 from '@/views/createChallenge/CreateTrin2';
import CreateTrin3 from '@/views/createChallenge/CreateTrin3';
// the Challenge
import ProfilChallenge from '@/views/theChallenge/ProfilChallenge';
import ExampleChallenge from '@/views/theChallenge/ExampleChallenge';
// edit Challenge
import EditForventninger from '@/views/editChallenge/EditForventninger';
import EditNameAndDescrip from '@/views/editChallenge/EditNameAndDescrip';
import EditTrin1 from '@/views/editChallenge/EditTrin1';
import EditTrin2 from '@/views/editChallenge/EditTrin2';
import EditTrin3 from '@/views/editChallenge/EditTrin3';
import EditStatusPlan from '@/views/editChallenge/EditStatusPlan';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
// Main navigation links: 
    {
      // Home
      path: '/hjem/:user_id',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Profile
      path: '/profil/:user_id',
      // has to go to user profile page
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      // SignUpExamples
      path: '/eksempler',
      name: 'Examples',
      component: SignUpExamples
    
    },
    {
      // SignUpChallenge
      path: '/eksempler/udfordringen/:udfordringen_id',
      name: 'SignUpChallenge',
      component: SignUpChallenge,
    },
    {
      // Examples
      path: '/eksempler/:user_id',
      name: 'LoggedInExamples',
      component: LoggedInExamples
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
      path: '/tilmeld/:udfordringen_id',
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
      path:'/eksempler/:user_id/:udfordringen_id/redigerEksempel/forventninger',
      name: 'AddForventninger',
      component: AddForventninger,
      meta: {
        requiresAuth: true
      }
    },
    {
      // EditExampleNameAndDescrip
      path:'/eksempler/:user_id/:udfordringen_id/redigerEksempel/navn&beskrivelse',
      name: 'EditExampleNameAndDescrip',
      component: EditExampleNameAndDescrip,
      meta: {
        requiresAuth: true
      }
    },
    {
      // EditExampleStatusPlan
      path: '/eksempler/:user_id/:udfordringen_id/redigerEksempel/statusPlan',
      name: 'EditExampleStatusPlan',
      component: EditExampleStatusPlan,
      meta: {
        requiresAuth: true
      }
    },
    {
      // EditExampleTrin
      path: '/eksempler/:user_id/:udfordringen_id/redigerEksempel/trin1/',
      name: 'EditExampleTrin1',
      component: EditExampleTrin1,
      meta: {
        requiresAuth: true
      }
    },
    {
      // EditExampleTrin
      path: '/eksempler/:user_id/:udfordringen_id/redigerEksempel/trin2/',
      name: 'EditExampleTrin2',
      component: EditExampleTrin2,
      meta: {
        requiresAuth: true
      }
    },
    {
      // EditExampleTrin
      path: '/eksempler/:user_id/:udfordringen_id/redigerEksempel/trin3/',
      name: 'EditExampleTrin3',
      component: EditExampleTrin3,
      meta: {
        requiresAuth: true
      }
    },

// Status
    {
      // StatusOpg
      path: '/hjem/:user_id/:udfordringen_id/status',
      name: 'StatusOpg',
      component: StatusOpg,
      meta: {
        requiresAuth: true
      }
    },
    {
      // StatusReflect
      path: '/hjem/:user_id/:udfordringen_id/status/reflektion',
      name: 'StatusReflect',
      component: StatusReflect,
      meta: {
        requiresAuth: true
      }
    },

// Create Challenge
    {
      // Create Forventninger
      path: '/hjem/:user_id/lavUdfordring/forventninger/',
      name: 'CreateForventninger',
      component: CreateForventninger,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Create Name and Description
      path: '/hjem/:user_id/lavUdfordring/navn&beskrivelse',
      name: 'CreateNameAndDescrip',
      component: CreateNameAndDescrip,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Create Statusplan
      path: '/hjem/:user_id/lavUdfordring/statusPlan',
      name: 'CreateStatusPlan',
      component: CreateStatusPlan,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Create Trin
      path: '/hjem/:user_id/lavUdfordring/trin1',
      name: 'CreateTrin1',
      component: CreateTrin1,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Create Trin
      path: '/hjem/:user_id/lavUdfordring/trin2',
      name: 'CreateTrin2',
      component: CreateTrin2,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Create Trin
      path: '/hjem/:user_id/lavUdfordring/trin3',
      name: 'CreateTrin3',
      component: CreateTrin3,
      meta: {
        requiresAuth: true
      }
    },

// the Challenge
    {
      // Challenge
      path: '/eksempler/:user_id/udfordringen/:udfordringen_id',
      name: 'ExampleChallenge',
      component: ExampleChallenge,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Challenge
      path: '/profil/:user_id/udfordringen/:udfordringen_id',
      name: 'ProfilChallenge',
      component: ProfilChallenge,
      meta: {
        requiresAuth: true
      }
    },

// Edit Challenge
    {
      // Edit Forventninger
      path: '/profil/:user_id/udfordringen/:udfordringen_id/redigerUdfordring/forventninger',
      name: 'EditForventninger',
      component: EditForventninger,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Edit Name And Desc
      path: '/profil/:user_id/udfordringen/:udfordringen_id/redigerUdfordring/navn&beskrivelse',
      name: 'EditNameAndDescrip',
      component: EditNameAndDescrip,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Edit Trin
      path: '/profil/:user_id/udfordringen/:udfordringen_id/redigerUdfordring/trin1/',
      name: 'EditTrin1',
      component: EditTrin1,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Edit Trin
      path: '/profil/:user_id/udfordringen/:udfordringen_id/redigerUdfordring/trin2',
      name: 'EditTrin2',
      component: EditTrin2,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Edit Trin
      path: '/profil/:user_id/udfordringen/:udfordringen_id/redigerUdfordring/trin3',
      name: 'EditTrin3',
      component: EditTrin3,
      meta: {
        requiresAuth: true
      }
    },
    {
      // Edit StatusPlan
      path: '/profil/:user_id/udfordringen/:udfordringen_id/redigerUdfordring/statusplan',
      name: 'EditStatusPlan',
      component: EditStatusPlan,
      meta: {
        requiresAuth: true
      }

    }

  ],
  scrollBehavior() {
  return {x: 0, y: 0}
}
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
      next({name: 'Frontpage'});
    }
  }else {
    next()
  }
});

export default router

