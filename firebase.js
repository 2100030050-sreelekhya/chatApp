// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//step-1
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6qVTmPOahIFcvxgKmGAIUVdFrjnE8iVA",
  authDomain: "whatsapp-clone-1985c.firebaseapp.com",
  projectId: "whatsapp-clone-1985c",
  storageBucket: "whatsapp-clone-1985c.appspot.com",
  messagingSenderId: "425841789769",
  appId: "1:425841789769:web:c42e4124806ed02e3f2898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

//step-2
const db= getFirestore();
const storage= getStorage();

//step-3
export {auth,db, storage}
