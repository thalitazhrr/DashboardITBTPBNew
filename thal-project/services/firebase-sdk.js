import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIW0DwwfKOwXPAfz-A8m7nuzW3l2aZrC4",
  authDomain: "thalproject.firebaseapp.com",
  databaseURL: "https://thalproject-default-rtdb.firebaseio.com",
  projectId: "thalproject",
  storageBucket: "thalproject.firebasestorage.app",
  messagingSenderId: "1026633962668",
  appId: "1:1026633962668:web:87fb6003abe715390ebb09"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;