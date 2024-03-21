// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsZL2wq0aVn_TlzRkoMbepyMkw3sk_J1c",
  authDomain: "shopping-cart-8ed32.firebaseapp.com",
  projectId: "shopping-cart-8ed32",
  storageBucket: "shopping-cart-8ed32.appspot.com",
  messagingSenderId: "216753608170",
  appId: "1:216753608170:web:988b5f42c99847f31dce93",
  measurementId: "G-BRELRNNWCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);