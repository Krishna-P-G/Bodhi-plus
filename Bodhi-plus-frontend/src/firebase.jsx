// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAnQyeoa8KKouVYhc1vg6H9lvF38AGZcI8",
  authDomain: "rest-api-18249.firebaseapp.com",
  projectId: "rest-api-18249",
  storageBucket: "rest-api-18249.appspot.com",
  messagingSenderId: "326807993308",
  appId: "1:326807993308:web:a5c7c7fc78b9c4ad282d19",
  measurementId: "G-3DP6MX5ZGW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({});
}
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
