// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhgnJZGWTZmEf3ZeCihYdaBe3P7M-NQ4",
  authDomain: "fir-testing-app-a7f25.firebaseapp.com",
  projectId: "fir-testing-app-a7f25",
  storageBucket: "fir-testing-app-a7f25.appspot.com",
  messagingSenderId: "1037843816769",
  appId: "1:1037843816769:web:b7b3b564382f6e135d81c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
// export const db =  getFirestore(app);    