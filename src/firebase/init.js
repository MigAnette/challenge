// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// Your web app's Firebase configuration
var config = {
apiKey: "AIzaSyB_jKLud6DcZcS-tciXd80CjjNZGd9CuZY",
authDomain: "challenge-347e9.firebaseapp.com",
databaseURL: "https://challenge-347e9.firebaseio.com",
projectId: "challenge-347e9",
storageBucket: "challenge-347e9.appspot.com",
messagingSenderId: "1085770629326",
appId: "1:1085770629326:web:e8794d77cdef05a5"
};

const firebaseApp = firebase.initializeApp(config);


//export firestore database
export default firebaseApp.firestore();
