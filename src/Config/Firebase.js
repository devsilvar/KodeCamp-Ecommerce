// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// Required for side-effects
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "bankapp-dbf19.firebaseapp.com",
  projectId: "bankapp-dbf19",
  storageBucket: "bankapp-dbf19.appspot.com",
  messagingSenderId: "148338675026",
  appId: "1:148338675026:web:b46416107f0ad77cfebe8b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
