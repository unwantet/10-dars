import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8t-l-oiI7iLZWqqenzfC-8gh7J39bfG0",
  authDomain: "nation-f.firebaseapp.com",
  projectId: "nation-f",
  storageBucket: "nation-f.appspot.com",
  messagingSenderId: "583387716415",
  appId: "1:583387716415:web:04cb52d409c28fa03a518a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
