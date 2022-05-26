// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfiAZSopBneqBeZtKOHj6C9Lr0b7bXK4A",
  authDomain: "first-auth-project-46e18.firebaseapp.com",
  projectId: "first-auth-project-46e18",
  storageBucket: "first-auth-project-46e18.appspot.com",
  messagingSenderId: "502058000870",
  appId: "1:502058000870:web:c9a3d801cb1793f79af627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const GoogleauthProvider = new GoogleAuthProvider()
export const auth = getAuth(app)