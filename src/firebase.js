// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const key = import.meta.env;

// Load environment variables from .env file
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Load environment variables from .env file
const firebaseConfig = {
  apiKey: key.VITE_FIREBASE_API_KEY,
  authDomain: key.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: key.VITE_FIREBASE_PROYECT_ID,
  storageBucket: key.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: key.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: key.VITE_FIREBASE_APP_ID,
  measurementId: key.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };