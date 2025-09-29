// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjvohtxzHhSlsmNYiOSTqk57vbJ5JTdPo",
  authDomain: "poiema-labs-llc.firebaseapp.com",
  projectId: "poiema-labs-llc",
  storageBucket: "poiema-labs-llc.firebasestorage.app",
  messagingSenderId: "66804440730",
  appId: "1:66804440730:web:4130f3f0ccc4228ec74923",
  measurementId: "G-JE3R6LF3QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
