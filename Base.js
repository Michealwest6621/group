// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZYo6fu3uCmrAPZcsJacijTpD6T8EcjTg",
  authDomain: "project-participants.firebaseapp.com",
  projectId: "project-participants",
  storageBucket: "project-participants.appspot.com",
  messagingSenderId: "846684577289",
  appId: "1:846684577289:web:23bf35ce9ca8ddb93822d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
