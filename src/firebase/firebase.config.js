// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZOcezQxOwRJwcHhkNtgl-vnfcUTtr4XQ",
  authDomain: "cozy-paw-care.firebaseapp.com",
  projectId: "cozy-paw-care",
  storageBucket: "cozy-paw-care.firebasestorage.app",
  messagingSenderId: "398083976889",
  appId: "1:398083976889:web:55912f51ccc575d982b568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);