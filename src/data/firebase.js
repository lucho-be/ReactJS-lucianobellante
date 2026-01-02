// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJd4L7VpIglV7fpOITjhOlGyiYVuB9ypk",
  authDomain: "sitioverde-4f27d.firebaseapp.com",
  projectId: "sitioverde-4f27d",
  storageBucket: "sitioverde-4f27d.firebasestorage.app",
  messagingSenderId: "585168516666",
  appId: "1:585168516666:web:5a1266b384e557ed2b2703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);