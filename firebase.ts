import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBaJHQHQcJzuBQkxdejX-COSLF3x-5l-kI",
  authDomain: "saas-unichat.firebaseapp.com",
  projectId: "saas-unichat",
  storageBucket: "saas-unichat.appspot.com",
  messagingSenderId: "512950337787",
  appId: "1:512950337787:web:c5de25509474eaaa7e305e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
