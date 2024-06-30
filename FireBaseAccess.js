// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCitiMI2k4nMXxIsd262iEsytTuBuhkfzY",
  authDomain: "vitallearns.firebaseapp.com",
  projectId: "vitallearns",
  storageBucket: "vitallearns.appspot.com",
  messagingSenderId: "434319365526",
  appId: "1:434319365526:web:d0c60d653b7aa2df50f9b7",
  measurementId: "G-TTFK3DQY7C"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);



export default firebaseApp;