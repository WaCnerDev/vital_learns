import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth(firebaseApp);

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export { firebaseApp, auth, loginUser };