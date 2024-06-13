// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr8X6d_kZQWPOc2_edpyau-v59BzhnTx4",
  authDomain: "instantchat-aad4f.firebaseapp.com",
  projectId: "instantchat-aad4f",
  storageBucket: "instantchat-aad4f.appspot.com",
  messagingSenderId: "645343900351",
  appId: "1:645343900351:web:968932a8a5aeae45780c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db= getFirestore(app);
