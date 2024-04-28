// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDthYglvPOfaFNxRL3_WsRqqMBxTLFpwWA",
  authDomain: "shopping-cart-f9c39.firebaseapp.com",
  projectId: "shopping-cart-f9c39",
  storageBucket: "shopping-cart-f9c39.appspot.com",
  messagingSenderId: "397190098134",
  appId: "1:397190098134:web:adf7d5c9ae3b104528ed77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);