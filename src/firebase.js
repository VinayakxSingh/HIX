// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjuTANB5ApbwXMOeWSKJuqbsgUP6a3Hg4",
  authDomain: "hixcosmetics.firebaseapp.com",
  databaseURL: "https://hixcosmetics-default-rtdb.firebaseio.com",
  projectId: "hixcosmetics",
  storageBucket: "hixcosmetics.firebasestorage.app",
  messagingSenderId: "165366147159",
  appId: "1:165366147159:web:32fe546dc98cbc04a95b12",
  measurementId: "G-066RYFV8PT",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Initialize Analytics
const analytics = getAnalytics(app);

// Export database so you can use it in other files
export { database };
