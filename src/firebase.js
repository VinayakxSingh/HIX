// src/firebase/config.js

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjuTANB5ApbwXMOeWSKJuqbsgUP6a3Hg4",
  authDomain: "hixcosmetics.firebaseapp.com",
  databaseURL: "https://hixcosmetics-default-rtdb.firebaseio.com",
  projectId: "hixcosmetics",
  storageBucket: "hixcosmetics.appspot.com",
  messagingSenderId: "165366147159",
  appId: "1:165366147159:web:32fe546dc98cbc04a95b12",
  measurementId: "G-066RYFV8PT",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Export
export { auth, database, analytics };
