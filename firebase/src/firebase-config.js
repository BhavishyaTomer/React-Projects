import {getAuth} from 'firebase/auth'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA3du74IqYhvUFsaiMpOzojj0I1dzqG0wY",
    authDomain: "react-firebase-auth-12451.firebaseapp.com",
    projectId: "react-firebase-auth-12451",
    storageBucket: "react-firebase-auth-12451.appspot.com",
    messagingSenderId: "800289021102",
    appId: "1:800289021102:web:76c48f7e6a1a85f895a13f",
    measurementId: "G-VVWS652V52"
  };


  const app=initializeApp(firebaseConfig)
  export const firebaseAuth=getAuth(app);
  