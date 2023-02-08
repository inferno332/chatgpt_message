import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnaEKucmszejvbyPz9liX4A9scF5jWT7U",
  authDomain: "chatgpt-messenger-93840.firebaseapp.com",
  projectId: "chatgpt-messenger-93840",
  storageBucket: "chatgpt-messenger-93840.appspot.com",
  messagingSenderId: "782773348308",
  appId: "1:782773348308:web:95edd99e77815ea6189841",
  measurementId: "G-TS003KFLBT",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
