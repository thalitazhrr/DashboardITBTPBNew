import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyAsMgMS_p-SoWHyCCU4IT4gzdWpmtFanDA",

  authDomain: "thal-project-6166c.firebaseapp.com",

  databaseURL: "https://thal-project-6166c-default-rtdb.firebaseio.com",

  projectId: "thal-project-6166c",

  storageBucket: "thal-project-6166c.firebasestorage.app",

  messagingSenderId: "682030314986",

  appId: "1:682030314986:web:b91b25335b5e63031e2e93"

};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;